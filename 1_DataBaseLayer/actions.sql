
-- -----------
-- INSERTS
-- -----------
INSERT INTO `agenda` (
    `full_names`,
    `direction`,
    `house_phone`,
    `mobile_phone`,
    `email`
) 
VALUES (
    'walter carlos',
    'dodoria 456',
    45671243,
    1156894325,
    'walter.carlos@company.com'
)
-- ---------------------------------

-- -----------
-- UPDATES
-- -----------
UPDATE agenda 
SET
    `full_names` = 'wendi carlos',
    `direction` = 'dodoria 456',
    `house_phone` = 4567000,
    `mobile_phone` = 115689000,
    `email` = 'wndy.carlos@company.com'
WHERE id = 3
-- ---------------------------------

-- -----------
-- DELETES
-- -----------
DELETE FROM agenda
WHERE id = 3