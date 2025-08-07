# Aggregation in MongoDB

## What is Aggregation?

Aggregation operations **process data records and return computed results**.  
They are used to perform **transformations and calculations** on large sets of data — similar to `GROUP BY` in SQL.

MongoDB uses the **aggregation pipeline**, which is a framework that allows data to pass through multiple stages where it is filtered, grouped, sorted, reshaped, and analyzed.

---

## 🧱 Basic Aggregation Stages (Pipeline)

| **Stage**       | **Description**                                                |
|------------------|----------------------------------------------------------------|
| `$match`         | Filters documents (like `find`).                              |
| `$group`         | Groups documents by a field and applies aggregation operators.|
| `$project`       | Reshapes documents (include/exclude fields, add computed ones).|
| `$sort`          | Sorts the documents in ascending or descending order.         |
| `$limit`         | Limits the number of documents passed to the next stage.      |
| `$skip`          | Skips the first N documents.                                  |
| `$unwind`        | Deconstructs arrays into individual documents.                |
| `$lookup`        | Performs a left outer join with another collection.           |
| `$addFields`     | Adds or updates fields in documents.                          |
| `$count`         | Returns the count of documents in the pipeline.               |
| `$out`           | Writes the result to a specified collection.                  |

---

## 💡 Example Aggregation Pipeline

```js
db.orders.aggregate([
  { $match: { status: "delivered" } },
  { $group: { _id: "$customerId", total: { $sum: "$amount" } } },
  { $sort: { total: -1 } }
])
