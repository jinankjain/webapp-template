## Creating auth module

$python manage.py startapp authentication

### Create custom Account object with is a subclass of AbstractBaseUser and its corresponding manager which is a subclass of BaseUserManager

- Create Account model as per needs
- Create AccountManager and override create_user and create_superuser function
