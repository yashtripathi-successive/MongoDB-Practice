# Indexing in MongoDB

## What is Indexing?

Indexes are special data structures that store a small portion of the collection’s data set in an easy-to-traverse form. They improve the performance of queries.

## Why Indexing?

Without indexes, MongoDB must perform a collection scan, i.e., scan every document to find the match. This can significantly slow down query performance, especially with large datasets.

## Types of Indexes in MongoDB

- **Default _id Index**: Automatically created on the `_id` field.
- **Single Field Index**: Index on a single field. 
  - Example: `db.users.createIndex({ name: 1 })`
- **Compound Index**: Index on multiple fields. 
  - Example: `db.users.createIndex({ name: 1, age: -1 })`
- **Multikey Index**: Automatically created for array fields.
- **Text Index**: Supports text search in string content. 
  - Example: `db.posts.createIndex({ content: "text" })`
- **Hashed Index**: Index using a hash of the field value, used for sharding.
- **Wildcard Index**: Indexes all fields in documents. 
  - Example: `db.collection.createIndex({ "$**": 1 })`
- **Geospatial Index**: Used for location-based queries. 
  - Examples: `2dsphere`, `2d` indexes.

## Creating an Index

To create an index, use the following command:

```javascript

# Creating an Index

db.collection.createIndex({ field: 1 }) // 1 for ascending, -1 for descending

# Dropping an Index

db.collection.dropIndex({ field: 1 })
db.collection.dropIndexes() // Drops all except _id

# Checking Indexes

db.collection.getIndexes()

# Index Use with Explain

db.collection.find({ field: value }).explain("executionStats")