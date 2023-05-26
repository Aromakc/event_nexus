import graphene
from graphene_django import DjangoObjectType
from .models import Organizer, User, Post, Subscription


class OrganizerType(DjangoObjectType):
    class Meta:
        model = Organizer


class UserType(DjangoObjectType):
    class Meta:
        model = User


class PostType(DjangoObjectType):
    class Meta:
        model = Post


class SubscriptionType(DjangoObjectType):
    class Meta:
        model = Subscription


class Query(graphene.ObjectType):
    organizer = graphene.Field(OrganizerType, id=graphene.ID())
    user = graphene.Field(UserType, id=graphene.ID())
    post = graphene.Field(PostType, id=graphene.ID())

    organizers = graphene.List(OrganizerType)
    users = graphene.List(UserType)
    posts = graphene.List(PostType)
    subscriptions = graphene.List(SubscriptionType)

    def resolve_organizer(root, info, id):
        try:
            return Organizer.objects.get(pk=id)
        except Organizer.DoesNotExist:
            return None

    def resolve_user(root, info, id):
        try:
            return User.objects.get(pk=id)
        except User.DoesNotExist:
            return None

    def resolve_post(root, info, id):
        try:
            return Post.objects.get(pk=id)
        except Post.DoesNotExist:
            return None

    def resolve_organizers(self, info):
        return Organizer.objects.all()

    def resolve_users(self, info):
        return User.objects.all()

    def resolve_posts(self, info):
        return Post.objects.all()

    def resolve_subscriptions(self, info):
        return Subscription.objects.all()


class CreateOrganizer(graphene.Mutation):
    organizer = graphene.Field(OrganizerType)

    class Arguments:
        name = graphene.String()
        description = graphene.String()
        logo = graphene.String()
        website = graphene.String()
        email = graphene.String()
        phone_number = graphene.String()
        active = graphene.Boolean()

    def mutate(
        self,
        info,
        name,
        description,
        logo=None,
        website=None,
        email=None,
        phone_number=None,
        active=True,
    ):
        organizer = Organizer(
            name=name,
            description=description,
            logo=logo,
            website=website,
            email=email,
            phone_number=phone_number,
            active=active,
        )
        organizer.save()
        return CreateOrganizer(organizer=organizer)


class UpdateOrganizer(graphene.Mutation):
    organizer = graphene.Field(OrganizerType)

    class Arguments:
        id = graphene.ID(required=True)
        name = graphene.String()
        description = graphene.String()
        logo = graphene.String()
        website = graphene.String()
        email = graphene.String()
        phone_number = graphene.String()
        active = graphene.Boolean()

    def mutate(self, info, id, **kwargs):
        try:
            organizer = Organizer.objects.get(pk=id)
            for key, value in kwargs.items():
                setattr(organizer, key, value)
            organizer.save()
            return UpdateOrganizer(organizer=organizer)
        except Organizer.DoesNotExist:
            return None


class DeleteOrganizer(graphene.Mutation):
    success = graphene.Boolean()

    class Arguments:
        id = graphene.ID(required=True)

    def mutate(self, info, id):
        try:
            organizer = Organizer.objects.get(pk=id)
            organizer.delete()
            return DeleteOrganizer(success=True)
        except Organizer.DoesNotExist:
            return DeleteOrganizer(success=False)


class CreateUser(graphene.Mutation):
    user = graphene.Field(UserType)

    class Arguments:
        name = graphene.String()
        email = graphene.String()
        password = graphene.String()
        phone_number = graphene.String()

    def mutate(self, info, name, email, password, phone_number=None):
        user = User.objects.create_user(
            name=name, email=email, password=password, phone_number=phone_number
        )
        return CreateUser(user=user)


class UpdateUser(graphene.Mutation):
    user = graphene.Field(UserType)

    class Arguments:
        id = graphene.ID(required=True)
        name = graphene.String()
        email = graphene.String()
        password = graphene.String()
        phone_number = graphene.String()

    def mutate(self, info, id, **kwargs):
        try:
            user = User.objects.get(pk=id)
            for key, value in kwargs.items():
                setattr(user, key, value)
            user.save()
            return UpdateUser(user=user)
        except User.DoesNotExist:
            return None


class DeleteUser(graphene.Mutation):
    success = graphene.Boolean()

    class Arguments:
        id = graphene.ID(required=True)

    def mutate(self, info, id):
        try:
            user = User.objects.get(pk=id)
            user.delete()
            return DeleteUser(success=True)
        except User.DoesNotExist:
            return DeleteUser(success=False)


class CreateSuperuser(graphene.Mutation):
    user = graphene.Field(UserType)

    class Arguments:
        name = graphene.String()
        email = graphene.String()
        password = graphene.String()
        phone_number = graphene.String()

    def mutate(self, info, name, email, password, phone_number=None):
        user = User.objects.create_superuser(
            name=name, email=email, password=password, phone_number=phone_number
        )
        return CreateSuperuser(user=user)


class CreatePost(graphene.Mutation):
    post = graphene.Field(PostType)

    class Arguments:
        title = graphene.String()
        description = graphene.String()
        banner = graphene.String()
        begin_at = graphene.DateTime()
        end_at = graphene.DateTime()
        time = graphene.Time()
        online = graphene.Boolean()
        venue = graphene.String()

    def mutate(root, info, **kwargs):
        post = Post.objects.create(**kwargs)
        return CreatePost(post=post)


class UpdatePost(graphene.Mutation):
    post = graphene.Field(PostType)

    class Arguments:
        id = graphene.ID(required=True)
        title = graphene.String()
        description = graphene.String()
        banner = graphene.String()
        begin_at = graphene.DateTime()
        end_at = graphene.DateTime()
        time = graphene.Time()
        online = graphene.Boolean()
        venue = graphene.String()

    def mutate(root, info, id, **kwargs):
        try:
            post = Post.objects.get(pk=id)
            for key, value in kwargs.items():
                setattr(post, key, value)
            post.save()
            return UpdatePost(post=post)
        except Post.DoesNotExist:
            return None


class DeletePost(graphene.Mutation):
    success = graphene.Boolean()

    class Arguments:
        id = graphene.ID(required=True)

    def mutate(root, info, id):
        try:
            post = Post.objects.get(pk=id)
            post.delete()
            return DeletePost(success=True)
        except Post.DoesNotExist:
            return DeletePost(success=False)


class CreateSubscription(graphene.Mutation):
    subscription = graphene.Field(SubscriptionType)

    class Arguments:
        user_id = graphene.ID(required=True)
        post_id = graphene.ID(required=True)

    def mutate(self, info, user_id, post_id):
        user = User.objects.get(id=user_id)
        post = Post.objects.get(id=post_id)
        subscription = Subscription.objects.create(user=user, post=post)
        return CreateSubscription(subscription=subscription)


class DeleteSubscription(graphene.Mutation):
    success = graphene.Boolean()

    class Arguments:
        user_id = graphene.ID(required=True)
        post_id = graphene.ID(required=True)

    def mutate(self, info, user_id, post_id):
        try:
            subscription = Subscription.objects.get(user_id=user_id, post_id=post_id)
            subscription.delete()
            return DeleteSubscription(success=True)
        except Subscription.DoesNotExist:
            return DeleteSubscription(success=False)


class Mutation(graphene.ObjectType):
    create_organizer = CreateOrganizer.Field()
    update_organizer = UpdateOrganizer.Field()
    delete_organizer = DeleteOrganizer.Field()

    create_user = CreateUser.Field()
    update_user = UpdateUser.Field()
    delete_user = DeleteUser.Field()
    create_superuser = CreateSuperuser.Field()

    create_post = CreatePost.Field()
    update_post = UpdatePost.Field()
    delete_post = DeletePost.Field()

    create_subscription = CreateSubscription.Field()
    delete_subscription = DeleteSubscription.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
