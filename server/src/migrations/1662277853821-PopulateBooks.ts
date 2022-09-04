import { MigrationInterface, QueryRunner } from "typeorm"

export class PopulateBooks1662277853821 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            insert into book (title, author, "publishedAt") values ('Bells, The', 'Angèle', '2019-07-06T07:33:10Z');
insert into book (title, author, "publishedAt") values ('Emperor and the Assassin, The (Jing ke ci qin wang)', 'Aloïs', '2002-02-16T23:12:39Z');
insert into book (title, author, "publishedAt") values ('Medallion, The', 'Irène', '1990-06-03T17:59:09Z');
insert into book (title, author, "publishedAt") values ('Fur: An Imaginary Portrait of Diane Arbus', 'Léandre', '2000-02-18T15:50:59Z');
insert into book (title, author, "publishedAt") values ('Chinese Box', 'Adélie', '2005-03-16T00:59:04Z');
insert into book (title, author, "publishedAt") values ('Princess Mononoke (Mononoke-hime)', 'Léana', '2004-10-19T05:14:20Z');
insert into book (title, author, "publishedAt") values ('Nashville', 'Marylène', '1999-11-26T05:18:31Z');
insert into book (title, author, "publishedAt") values ('Behind the Mask: The Rise of Leslie Vernon', 'Björn', '2008-11-12T11:19:54Z');
insert into book (title, author, "publishedAt") values ('Alone for Christmas', 'Béatrice', '2013-07-19T03:28:24Z');
insert into book (title, author, "publishedAt") values ('Los Marziano', 'Kuí', '2004-12-27T04:06:54Z');
insert into book (title, author, "publishedAt") values ('We Are The Night (Wir sind die Nacht)', 'Anaé', '2005-04-28T17:47:13Z');
insert into book (title, author, "publishedAt") values ('My Mother''s Courage (Mutters Courage)', 'Mélys', '2004-10-22T08:46:01Z');
insert into book (title, author, "publishedAt") values ('Yamla Pagla Deewana 2', 'Maïté', '2020-06-11T20:50:13Z');
insert into book (title, author, "publishedAt") values ('Amati Girls, The', 'Séréna', '2007-07-14T21:42:16Z');
insert into book (title, author, "publishedAt") values ('Firstborn', 'Loïs', '1992-01-18T09:43:52Z');
insert into book (title, author, "publishedAt") values ('Looking for Lenny ', 'Régine', '2011-10-15T12:33:17Z');
insert into book (title, author, "publishedAt") values ('Heroic Ones, The (Shi san tai bao)', 'Cléa', '1995-01-05T14:03:43Z');
insert into book (title, author, "publishedAt") values ('White Reindeer', 'Camélia', '2020-07-26T14:05:26Z');
insert into book (title, author, "publishedAt") values ('Enemy Mine', 'Maïwenn', '1998-01-01T02:27:26Z');
insert into book (title, author, "publishedAt") values ('The Puzzle', 'Adélie', '2019-03-16T10:58:56Z');
insert into book (title, author, "publishedAt") values ('In the House', 'Noëlla', '2010-05-07T20:21:48Z');
insert into book (title, author, "publishedAt") values ('For Pete''s Sake', 'Måns', '2008-08-09T13:05:39Z');
insert into book (title, author, "publishedAt") values ('Tony Manero', 'Nélie', '1995-01-03T03:31:22Z');
insert into book (title, author, "publishedAt") values ('Goddess, The (Shen nu)', 'Mélys', '1995-11-19T18:44:15Z');
insert into book (title, author, "publishedAt") values ('Hello! How Are You? (Buna! Ce faci?)', 'Andrée', '2016-10-15T23:09:56Z');
insert into book (title, author, "publishedAt") values ('Angels in the Outfield', 'Loïs', '2000-04-08T20:29:03Z');
insert into book (title, author, "publishedAt") values ('T-Rex: Back to the Cretaceous', 'Clélia', '2003-01-13T09:43:58Z');
insert into book (title, author, "publishedAt") values ('Last Summer in the Hamptons', 'Danièle', '1990-05-15T14:27:00Z');
insert into book (title, author, "publishedAt") values ('Mating of Millie, The', 'Maëly', '2006-08-14T05:54:14Z');
insert into book (title, author, "publishedAt") values ('Haunted Honeymoon', 'Léane', '1994-05-24T09:59:44Z');
insert into book (title, author, "publishedAt") values ('Tyler Perry''s Why Did I Get Married Too?', 'Laurène', '2009-10-05T18:21:06Z');
insert into book (title, author, "publishedAt") values ('Wonderland', 'Lorène', '1997-06-05T00:10:52Z');
insert into book (title, author, "publishedAt") values ('Beaches', 'Annotés', '1992-05-28T11:17:46Z');
insert into book (title, author, "publishedAt") values ('Night Crossing', 'Mårten', '2013-02-18T04:05:59Z');
insert into book (title, author, "publishedAt") values ('Skirt Day (La journée de la jupe)', 'Nélie', '2012-08-12T16:29:07Z');
insert into book (title, author, "publishedAt") values ('Dragon: The Bruce Lee Story', 'Uò', '2002-06-12T12:40:15Z');
insert into book (title, author, "publishedAt") values ('Waterboy, The', 'Börje', '2015-05-22T20:15:12Z');
insert into book (title, author, "publishedAt") values ('Fearless Freaks, The', 'Maïwenn', '2010-06-11T02:13:23Z');
insert into book (title, author, "publishedAt") values ('White Mane (Crin blanc: Le cheval sauvage)', 'Josée', '2001-06-20T02:13:18Z');
insert into book (title, author, "publishedAt") values ('Pandora''s Box (Pandora''nin kutusu)', 'Mélys', '2003-01-19T08:37:48Z');
insert into book (title, author, "publishedAt") values ('Crimes of Fashion', 'Irène', '2000-05-07T05:13:40Z');
insert into book (title, author, "publishedAt") values ('Killer (Bulletproof Heart)', 'Desirée', '1991-04-03T22:25:19Z');
insert into book (title, author, "publishedAt") values ('Lucky Jordan', 'Gaëlle', '2000-05-07T04:41:34Z');
insert into book (title, author, "publishedAt") values ('Deserter (Dezertir)', 'Laurène', '2019-11-26T10:46:46Z');
insert into book (title, author, "publishedAt") values ('I''ll Sleep When I''m Dead', 'Lèi', '2002-09-07T17:28:04Z');
insert into book (title, author, "publishedAt") values ('Devils, The', 'Marlène', '2012-04-02T11:24:36Z');
insert into book (title, author, "publishedAt") values ('Lost Son, The', 'Hélène', '2007-05-04T10:55:35Z');
insert into book (title, author, "publishedAt") values ('Red Baron, The (Der rote Baron)', 'Ruì', '2014-07-15T14:17:53Z');
insert into book (title, author, "publishedAt") values ('Lucky You', 'Noémie', '2001-11-28T09:23:10Z');
insert into book (title, author, "publishedAt") values ('Red Dragon', 'Pénélope', '2006-07-15T14:32:39Z');
insert into book (title, author, "publishedAt") values ('Chair, The', 'Marlène', '2005-12-20T02:36:17Z');
insert into book (title, author, "publishedAt") values ('Aladin', 'Clémentine', '2017-01-14T21:24:57Z');
insert into book (title, author, "publishedAt") values ('Destinées, Les (Destinées sentimentales, Les)', 'Séréna', '2000-09-11T13:39:47Z');
insert into book (title, author, "publishedAt") values ('Life of Jesus, The (La vie de Jésus)', 'Bérangère', '2002-11-08T21:58:05Z');
insert into book (title, author, "publishedAt") values ('Cursed', 'Yóu', '2002-10-04T15:51:14Z');
insert into book (title, author, "publishedAt") values ('Fargo', 'Audréanne', '2010-06-22T10:13:04Z');
insert into book (title, author, "publishedAt") values ('Innocent Man, An', 'Audréanne', '2017-01-03T00:42:51Z');
insert into book (title, author, "publishedAt") values ('War at Home, The', 'Yóu', '1993-01-28T16:40:08Z');
insert into book (title, author, "publishedAt") values ('Reluctant Saint, The', 'Börje', '2002-08-14T11:24:23Z');
insert into book (title, author, "publishedAt") values ('Tell It to the Marines', 'Zoé', '1996-03-24T22:26:29Z');
insert into book (title, author, "publishedAt") values ('Organizer, The (I compagni)', 'Göran', '2009-01-13T08:29:31Z');
insert into book (title, author, "publishedAt") values ('Dragonlance: Dragons of Autumn Twilight', 'Illustrée', '2017-07-22T21:12:25Z');
insert into book (title, author, "publishedAt") values ('Now and Then', 'Marylène', '1994-07-12T08:34:23Z');
insert into book (title, author, "publishedAt") values ('More the Merrier, The', 'Estève', '2020-11-26T09:58:29Z');
insert into book (title, author, "publishedAt") values ('Loulou', 'Maï', '2021-08-15T20:20:32Z');
insert into book (title, author, "publishedAt") values ('Necessary Roughness', 'Léa', '1999-04-25T19:41:02Z');
insert into book (title, author, "publishedAt") values ('Bloodhounds of Broadway', 'Aimée', '2002-12-15T14:30:55Z');
insert into book (title, author, "publishedAt") values ('Going Berserk', 'Valérie', '1994-11-11T20:57:23Z');
insert into book (title, author, "publishedAt") values ('Vito', 'Agnès', '2010-10-03T05:42:08Z');
insert into book (title, author, "publishedAt") values ('Crime of Passion', 'Miléna', '1996-01-10T00:30:07Z');
insert into book (title, author, "publishedAt") values ('Hercules and the Amazon Women', 'Mégane', '2012-04-09T12:53:03Z');
insert into book (title, author, "publishedAt") values ('Rage in Placid Lake, The', 'Estée', '2020-02-20T20:47:50Z');
insert into book (title, author, "publishedAt") values ('Orderly or Disorderly (Be Tartib ya Bedoun-e Tartib)', 'Amélie', '2015-04-20T15:30:28Z');
insert into book (title, author, "publishedAt") values ('Scenic Route', 'Mélina', '2013-08-27T17:40:42Z');
insert into book (title, author, "publishedAt") values ('Among Giants', 'Åsa', '1993-07-15T11:07:53Z');
insert into book (title, author, "publishedAt") values ('Guilty Hands', 'Björn', '2008-11-09T13:04:18Z');
insert into book (title, author, "publishedAt") values ('Klown: The Movie (Klovn)', 'Géraldine', '2005-05-26T04:33:32Z');
insert into book (title, author, "publishedAt") values ('Night People', 'Stéphanie', '2007-07-15T03:46:38Z');
insert into book (title, author, "publishedAt") values ('Confessor Caressor', 'Mélia', '1991-05-04T09:00:52Z');
insert into book (title, author, "publishedAt") values ('Letter, The', 'Agnès', '2003-10-06T04:40:53Z');
insert into book (title, author, "publishedAt") values ('Industrial Symphony No. 1: The Dream of the Brokenhearted', 'Cléopatre', '2008-06-14T13:46:01Z');
insert into book (title, author, "publishedAt") values ('Man with One Red Shoe, The', 'Jú', '2006-04-30T18:17:05Z');
insert into book (title, author, "publishedAt") values ('Bishop''s Wife, The', 'Cléopatre', '1992-07-14T18:28:21Z');
insert into book (title, author, "publishedAt") values ('Sorority House Massacre', 'Méryl', '2018-11-02T10:09:46Z');
insert into book (title, author, "publishedAt") values ('Bobby Jones, Stroke of Genius', 'Anaïs', '2004-12-03T11:18:52Z');
insert into book (title, author, "publishedAt") values ('Boys Life 3', 'Léa', '2009-01-25T00:08:39Z');
insert into book (title, author, "publishedAt") values ('Twelve Angry Men', 'Pò', '1991-01-10T10:21:33Z');
insert into book (title, author, "publishedAt") values ('Frogs', 'Kuí', '2001-09-21T17:35:51Z');
insert into book (title, author, "publishedAt") values ('Sentimental Swordsman, The (To ching chien ko wu ching chien)', 'Marie-ève', '2020-08-21T17:20:38Z');
insert into book (title, author, "publishedAt") values ('Bakhita', 'Anaëlle', '2011-05-02T21:35:59Z');
insert into book (title, author, "publishedAt") values ('Judas Kiss', 'Liè', '2009-04-26T22:01:39Z');
insert into book (title, author, "publishedAt") values ('Trouble the Water', 'Méryl', '2009-12-29T17:00:15Z');
insert into book (title, author, "publishedAt") values ('Louis C.K.: Live at the Beacon Theater', 'Méryl', '1997-09-19T13:24:39Z');
insert into book (title, author, "publishedAt") values ('Odgrobadogroba', 'Anaël', '1999-11-15T18:42:09Z');
insert into book (title, author, "publishedAt") values ('War Lord, The', 'Görel', '1995-08-05T15:14:10Z');
insert into book (title, author, "publishedAt") values ('The Valley of Gwangi', 'Geneviève', '2008-06-28T21:19:52Z');
insert into book (title, author, "publishedAt") values ('Zouzou', 'André', '1992-06-25T03:37:32Z');
insert into book (title, author, "publishedAt") values ('How Green Was My Valley', 'Åke', '2017-03-10T06:55:35Z');
insert into book (title, author, "publishedAt") values ('American Ninja 4: The Annihilation', 'Pénélope', '1995-09-19T06:21:41Z');
insert into book (title, author, "publishedAt") values ('Trishna', 'Miléna', '2000-09-01T22:42:46Z');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
