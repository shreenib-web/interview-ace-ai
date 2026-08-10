export const sqlQuestions = [
  {
    id: 501,
    title: "What is SQL?",
    answer:
      "SQL stands for Structured Query Language and is used to work with relational databases. It can create, read, update, and delete data. SQL is also used for filtering, joining, grouping, and analyzing structured data.",
    category: "SQL",
    difficulty: "Easy",
  },
  {
    id: 502,
    title: "What is a table in SQL?",
    answer:
      "A table stores related data in rows and columns. Each row represents a record, and each column represents an attribute of that record. Tables are the core structure in relational databases.",
    category: "SQL",
    difficulty: "Easy",
  },
  {
    id: 503,
    title: "What is a primary key?",
    answer:
      "A primary key uniquely identifies each row in a table. It cannot contain duplicate values and normally cannot be null. Primary keys help enforce data integrity and make relationships reliable.",
    category: "SQL",
    difficulty: "Easy",
  },
  {
    id: 504,
    title: "What is a foreign key?",
    answer:
      "A foreign key is a column that references a primary key in another table. It creates a relationship between tables and helps enforce referential integrity. For example, an orders table may reference a users table.",
    category: "SQL",
    difficulty: "Easy",
  },
  {
    id: 505,
    title: "What is the SELECT statement used for?",
    answer:
      "SELECT retrieves data from one or more tables. It can choose specific columns, filter rows, sort results, and combine data with joins. It is the most commonly used SQL statement for reading data.",
    category: "SQL",
    difficulty: "Easy",
  },
  {
    id: 506,
    title: "What is the WHERE clause?",
    answer:
      "WHERE filters rows based on a condition before results are returned. It is used with SELECT, UPDATE, and DELETE statements. Good WHERE clauses help retrieve only the data needed.",
    category: "SQL",
    difficulty: "Easy",
  },
  {
    id: 507,
    title: "What is ORDER BY used for?",
    answer:
      "ORDER BY sorts query results by one or more columns. Sorting can be ascending with ASC or descending with DESC. It is often used with LIMIT or pagination to produce predictable result order.",
    category: "SQL",
    difficulty: "Easy",
  },
  {
    id: 508,
    title: "What is the difference between INNER JOIN and LEFT JOIN?",
    answer:
      "INNER JOIN returns only rows that have matching values in both tables. LEFT JOIN returns all rows from the left table and matching rows from the right table, with nulls when no match exists. The choice depends on whether unmatched left-side records should remain in the result.",
    category: "SQL",
    difficulty: "Medium",
  },
  {
    id: 509,
    title: "What is GROUP BY used for?",
    answer:
      "GROUP BY groups rows that share the same values in selected columns. It is commonly used with aggregate functions like COUNT, SUM, AVG, MIN, and MAX. It helps summarize data instead of returning every individual row.",
    category: "SQL",
    difficulty: "Medium",
  },
  {
    id: 510,
    title: "What is the difference between WHERE and HAVING?",
    answer:
      "WHERE filters rows before grouping happens. HAVING filters grouped results after GROUP BY and aggregate functions are applied. Use WHERE for row-level conditions and HAVING for aggregate conditions.",
    category: "SQL",
    difficulty: "Medium",
  },
  {
    id: 511,
    title: "What is an index in SQL?",
    answer:
      "An index is a data structure that helps the database find rows faster. It improves read performance for suitable queries but adds storage and can slow inserts, updates, and deletes. Indexes should match real query patterns.",
    category: "SQL",
    difficulty: "Medium",
  },
  {
    id: 512,
    title: "What is normalization?",
    answer:
      "Normalization organizes data to reduce duplication and improve integrity. It usually splits data into related tables and uses keys to connect them. Good normalization makes updates safer and reduces inconsistent data.",
    category: "SQL",
    difficulty: "Medium",
  },
  {
    id: 513,
    title: "What is a subquery?",
    answer:
      "A subquery is a query nested inside another SQL query. It can be used for filtering, calculating values, or checking existence. Subqueries can sometimes be rewritten as joins depending on readability and performance.",
    category: "SQL",
    difficulty: "Medium",
  },
  {
    id: 514,
    title: "What is the difference between UNION and UNION ALL?",
    answer:
      "UNION combines results and removes duplicate rows. UNION ALL combines results without removing duplicates, so it is usually faster. Use UNION ALL when duplicates are acceptable or already impossible.",
    category: "SQL",
    difficulty: "Medium",
  },
  {
    id: 515,
    title: "What are aggregate functions in SQL?",
    answer:
      "Aggregate functions calculate a single result from multiple rows. Common examples include COUNT, SUM, AVG, MIN, and MAX. They are often used with GROUP BY to summarize data by category.",
    category: "SQL",
    difficulty: "Medium",
  },
  {
    id: 516,
    title: "What is a transaction in SQL?",
    answer:
      "A transaction is a group of database operations treated as one unit of work. It should either fully succeed with COMMIT or be undone with ROLLBACK. Transactions protect data consistency when multiple related changes are required.",
    category: "SQL",
    difficulty: "Hard",
  },
  {
    id: 517,
    title: "What are ACID properties?",
    answer:
      "ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties describe reliable transaction behavior in relational databases. They help ensure data remains correct even during failures or concurrent access.",
    category: "SQL",
    difficulty: "Hard",
  },
  {
    id: 518,
    title: "What is the difference between DELETE, TRUNCATE, and DROP?",
    answer:
      "DELETE removes selected rows and can use a WHERE clause. TRUNCATE removes all rows from a table more quickly in many databases. DROP removes the table structure itself, including its data and definition.",
    category: "SQL",
    difficulty: "Hard",
  },
  {
    id: 519,
    title: "What are window functions in SQL?",
    answer:
      "Window functions calculate values across related rows without collapsing them into one grouped row. Examples include ROW_NUMBER, RANK, LAG, LEAD, and running totals. They are useful for analytics, ranking, and comparing rows within partitions.",
    category: "SQL",
    difficulty: "Hard",
  },
  {
    id: 520,
    title: "How would you optimize a slow SQL query?",
    answer:
      "Start by reading the execution plan to understand how the database is running the query. Check indexes, join conditions, filtering, selected columns, and whether the query reads more data than needed. Optimization should be measured because a change that helps one query can hurt another workload.",
    category: "SQL",
    difficulty: "Hard",
  },
];
