DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

DROP TABLE IF EXISTS department_table;
CREATE TABLE department_table (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);

DROP TABLE IF EXISTS role_table;
CREATE TABLE role_table (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  role_name VARCHAR(30) NOT NULL,
  salary DECIMAL(5,2),
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES department_table(id)
  ON DELETE SET NULL
);

DROP TABLE IF EXISTS employee_table;
CREATE TABLE employee_table (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  manager_id INT,
  FOREIGN KEY (manager_id)
  REFERENCES employee_table(id),
  role_id INT,
  FOREIGN KEY (role_id)
  REFERENCES role_table(id)
  ON DELETE SET NULL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES department_table(id)
  ON DELETE SET NULL
);