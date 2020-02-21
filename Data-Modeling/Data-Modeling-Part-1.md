#### Exercise 1.

Imagine you are creating a website to organize your personal recipe collection. You want to be able to:
- See the recipe name and description
- Filter by vegetarian or non-vegetarian recipes
- Sort by date added to your collection
- Filter by which meal of the day the recipe is for
- Track how many times you've made each recipe
- Find out which friend gave you this recipe (if any)

Make a data model for this app, and answer the following questions:
- What is the entity?
    -Recipe
- What are the attributes of the entity?
    -name
    -description
    -date added
    -vegetarian
    -date added
    -instructions
    -author
    
- What is the primary key of the entity?
    -ID
- What are the data types of the attributes?
    - name: (Text)
    - description: (Text)
    - date added (Text)
    - date added (Date)
    - vegetarian (Boolean)
    - instructions (Text)
    - author (Text)
    - made count(integer)
    - source (Text)
- Are there other ways you might model this data?
    - Alternative to relational data modeling is document modeling which is suitable for less structured data.

#### Exercise 2.

In your own words, define the following terms:
- Entity:
    The encompassing of main topic of the data
- Attribute:
    The details of the entity organized in columns
- Data type:
    The attributes type of data such as text, boolean, date, integer, and float.
- Primary key:
    The unique identifier in a row of the database.
- Schema:
    The shape of the data, letting us know what columns a table will have.