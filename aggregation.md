## Aggregation in MongoDB

# What is Aggregation?

Aggregation operations process data records and return computed results.

Similar to GROUP BY in SQL.

# Basic Aggregation Stages (Pipeline)

# Stage	    Description

$match	    Filters documents (like find)
$group	    Groups documents by a field and applies aggregation operators
$project	Reshapes documents (includes, excludes fields)
$sort	    Sorts input documents
$limit	    Limits the number of documents
$skip	    Skips the first N documents
$unwind	    Deconstructs arrays
$lookup	    Performs left outer joins with another collection
$addFields	Adds new fields to documents
$count	    Returns a count of the number of documents
$out	    Writes the results to a new collection

Example : 

db.orders.aggregate([
  { $match: { status: "delivered" } },
  { $group: { _id: "$customerId", total: { $sum: "$amount" } } },
  { $sort: { total: -1 } }
])

## Common Aggregation Operators

# Operator	         Usage

$sum	             Sum of numeric values
$avg	             Average value
$min, $max	         Minimum and maximum
$push, $addToSet	 Push values to array or add unique ones
$first, $last	     Get first or last value in group

## Indexing vs Aggregation:

# Key Differences

Feature	             Indexing	                          Aggregation
Purpose	             Speeds up read/search operations	  Processes and transforms data
Performance	         Makes queries faster	              Used for analysis & reporting

