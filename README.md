# EVENT NEXUS

# USER SLICE

- userid
- name
- phone
- isverified
- isOrganizer
- registerdClub

# POST SLICE

- postID
- postTitle
- postDescription
- postBanner
- postDateStart
- postDateEnd
- postTime
- postOrganizer
- postOwner
- postOnline (boolean)
- postVenue

- dispatcher:{addPost, }

# Organization (database)

- id
- name
- logo
- description
- contact { phone, email }

# backend-configuration

cd backend
python -m venv env  
./env/scripts/activate.ps1
pip install -r requirements.txt
python manage.py makemigrations events
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
