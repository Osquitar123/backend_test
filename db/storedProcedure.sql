CREATE DEFINER=`root`@`localhost` PROCEDURE `playerAdd`(
IN _id int,
IN _name varchar(45),
IN _position varchar(45),
IN _nation varchar(45),
IN _team varchar(45)
)
BEGIN
	IF _id = 0 THEN
		INSERT INTO players (name, position, nation, team)
		VALUES (_name, _position, _nation, _team);
		SET _id = last_insert_id();
	ELSE 
		UPDATE players 
        SET 
			name = _name,
            position = _position,
            nation = _nation,
            team = _team
            WHERE id = _id;
	END IF;
    SELECT _id AS id;
END