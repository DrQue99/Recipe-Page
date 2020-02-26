## Queries

After designing and creating your tables above, include SQL for the following queries 

### Creating/Updating Data

1. Insert a new user that is joining the platform

   ``` sql
   insert into users values(id, username, email, date_joined );
   ```

   

2. Insert record that a user uploaded a photo of a given url

   ```sql
   insert into hearted_photos values(photo_id, user_id);
   ```

   

3. Update the database to record that a user Heart'ed a specific photo  

   ```sql
   update hearted_photos 
   set user_id = (new user who liked photo)
   where photo_id = (the hearted photos id);
   ```

   

### Reading Data

1. Find all the photos of one user (given their username)

   ```sql
   select users.userName, photos.user_id
   inner join photos 
   on users.user_id = photos.user_id
   where users.userName = 'username';
   ```

   

2. Find all the photos that one user Hearted

   ```sql
   select photo_id from hearted_photos 
   where hearted_photos.user_id = 'user_id';
   ```

   

3. Find all the Hearts for a given photo (given its primary key)

   ```sql
   select count(user_id) from hearted_photos AS hearted
   where hearted.photo_id = photo_id;
   
   ```

   

## End of Requirements

If you have completed the above, or the due date has arrived, please submit according to instructions above. If you want more challenges, please continue.
