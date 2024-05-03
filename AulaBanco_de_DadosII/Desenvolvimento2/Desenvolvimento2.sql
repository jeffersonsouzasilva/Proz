CREATE DATABASE mydatabase;

USE mydatabase;

CREATE TABLE customers (
  customer_id SERIAL PRIMARY KEY,
  customer_name VARCHAR(50),
  level VARCHAR(10)
);

CREATE TABLE sales (
  sales_id SERIAL PRIMARY KEY,
  customer_id INTEGER,
  sales_amount FLOAT,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE audit_log (
  log_id SERIAL PRIMARY KEY,
  sales_id INTEGER,
  previous_amount FLOAT,
  new_amount FLOAT,
  updated_by VARCHAR(50),
  updated_on TIMESTAMP,
  FOREIGN KEY (sales_id) REFERENCES sales(sales_id)
);



CREATE OR REPLACE FUNCTION log_sales_updates()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO audit_log(sales_id, previous_amount, new_amount, updated_by, updated_on)
    VALUES (NEW.sales_id, OLD.sales_amount, NEW.sales_amount, (SELECT CURRENT_USER), NOW());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER log_sales_updates_trigger
AFTER UPDATE
ON sales
FOR EACH ROW
EXECUTE PROCEDURE log_sales_updates();