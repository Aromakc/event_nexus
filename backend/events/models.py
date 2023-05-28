import uuid
from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)
from django.core.validators import RegexValidator


class Organizer(models.Model):
    phone_regex = RegexValidator(
        regex=r"^\+977\d{10}$",
        message="Phone number must be entered in the format: '+977xxxxxxxxxx'.",
    )

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    description = models.TextField()
    logo = models.ImageField(upload_to="organization_logos/", null=True, blank=True)
    website = models.URLField(max_length=200, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    phone_number = models.CharField(
        max_length=14, validators=[phone_regex], null=True, blank=True
    )
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        return self.create_user(email, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    phone_regex = RegexValidator(
        regex=r"^\+977\d{10}$",
        message="Phone number must be entered in the format: '+977xxxxxxxxxx'.",
    )

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    avatar = models.ImageField(upload_to="user_avatars/", null=True, blank=True)
    phone_number = models.CharField(
        max_length=14,
        validators=[phone_regex],
    )
    organization_responsible_for = models.ManyToManyField(
        Organizer, blank=True, related_name="responsible_users"
    )

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name"]

    objects = UserManager()

    def __str__(self):
        return self.email


class Post(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    description = models.TextField()
    banner = models.ImageField(upload_to="post_banners/")
    begin_at = models.DateTimeField()
    end_at = models.DateTimeField()
    time = models.TimeField()
    organizer = models.ForeignKey(
        Organizer, on_delete=models.CASCADE, related_name="posts_organized"
    )
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="posts_owned"
    )
    online = models.BooleanField(null=True, blank=True)
    venue = models.CharField(max_length=100)
    subscribers = models.ManyToManyField(
        User, through="Subscription", related_name="subscribed_posts"
    )

    def __str__(self):
        return self.title


class Subscription(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    subscribed_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ["user", "post"]
