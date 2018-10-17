   -- Some comment

   --

                               SELECT * FROM table_name
    WHERE name = 'name';

  -- Some comment
--

SELECT * FROM table_name
    WHERE name = 'name';

 --                     Some                        comment
--

                        SELECT * FROM table_name
                                              WHERE name = 'name';

-- Some comment
                   --

SELECT * FROM table_name
    WHERE name = 'name';

-- Some comment
--

SELECT * FROM table_name
    WHERE name = 'name';


CREATE FUNCTION some_name() RETURNS trigger AS $defaults$
    BEGIN
        -- Comment
        IF CONDITION THEN
		    EXECUTE action();
        END IF;

        IF CONDITION THEN
		    EXECUTE action();
        END IF;

        RETURN NEW;
    END;
$defaults$ LANGUAGE plpgsql;



