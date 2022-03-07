DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;

CREATE TABLE `employee_tracker_db`.`department` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE);

CREATE TABLE `employee_tracker_db`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `salary` DECIMAL(8,2) NULL,
  `department_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_idx` (`department_id` ASC) VISIBLE,
  CONSTRAINT `id`
    FOREIGN KEY (`department_id`)
    REFERENCES `employee_tracker_db`.`department` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);


CREATE TABLE `employee_tracker_db`.`employee` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `role_id` INT NULL,
  `manager_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `role_id_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `role_id`
    FOREIGN KEY (`role_id`)
    REFERENCES `employee_tracker_db`.`role` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);




