BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Users" (
	"id"	INTEGER PRIMARY KEY AUTOINCREMENT,
	"email"	TEXT,
	"password"	TEXT,
	"createdAt"	REAL,
	"updatedAt"	REAL
);
COMMIT;