-- -----------
-- Populate Table
-- -----------
INSERT INTO `persons` (`id`, `name`, `address`, `housePhone`, `mobilePhone`, `email`, `avatar`) VALUES
(1, 'walter carlos', 'dodoria 456', '45671243', '1156894325', 'walter.carlos@company.com', 'https://i1.sndcdn.com/avatars-000036726170-xxda84-t500x500.jpg'),
(2, 'ramona perez', 'sabon 3564', '4789243', '115597867', 'ramona.perez@company.com', 'https://i1.sndcdn.com/avatars-000036726170-xxda84-t500x500.jpg'),
(3, 'marcos rosi', 'giñu 9486', '45693873', '11563564325', 'marcos.rosi@company.com', 'https://i1.sndcdn.com/avatars-000036726170-xxda84-t500x500.jpg');



-- -----------
-- INSERTS
-- -----------
INSERT INTO persons (
    `full_names`,
    `address`,
    `housePhone`,
    `mobilePhone`,
    `email`,
    `avatar`
) 
VALUES (
    'walter carlos',
    'dodoria 456',
    45671243,
    1156894325,
    'walter.carlos@company.com',
    'https://i1.sndcdn.com/avatars-000036726170-xxda84-t500x500.jpg'
)
-- ---------------------------------

-- -----------
-- UPDATES
-- -----------
UPDATE persons 
SET
    `name` = 'wendi carlos',
    `address` = 'dodoria 456',
    `housePhone` = 4567000,
    `mobilePhone` = 115689000,
    `email` = 'wndy.carlos@company.com'
WHERE id = 3
-- ---------------------------------
UPDATE persons 
SET
    `avatar` = 'https://i1.sndcdn.com/avatars-000036726170-xxda84-t500x500.jpg'
WHERE id = 1

-- -----------
-- DELETES
-- -----------
DELETE FROM persons
WHERE id = 3