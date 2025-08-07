## Indexing in MongoDB

# What is Indexing?

Indexes are special data structures that store a small portion of the collection’s data set in an easy-to-traverse form.

Improve the performance of queries.

# Why Indexing?

Without indexes, MongoDB must perform a collection scan, i.e., scan every document to find the match.

## Types of Indexes in MongoDB

# Type	                Description

Default _id Index       Automatically created on the _id field.
Single Field Index	    Index on a single field. E.g., db.users.createIndex({ name: 1 })
Compound Index	        Index on multiple fields. E.g., db.users.createIndex({ name: 1, age: -1 })
Multikey Index	        Automatically created for array fields.
Text Index	            Supports text search in string content. E.g., db.posts.createIndex({ content: "text" })
Hashed Index	        Index using a hash of the field value, used for sharding.
Wildcard Index	        Indexes all fields in documents. E.g., db.collection.createIndex({ "$**": 1 })
Geospatial Index	    Used for location-based queries. E.g., 2dsphere, 2d indexes.

# Creating an Index

db.collection.createIndex({ field: 1 }) // 1 for ascending, -1 for descending

# Dropping an Index

db.collection.dropIndex({ field: 1 })
db.collection.dropIndexes() // Drops all except _id

# Checking Indexes

db.collection.getIndexes()

# Index Use with Explain

db.collection.find({ field: value }).explain("executionStats")