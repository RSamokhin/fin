--
-- PostgreSQL database dump
--

-- Dumped from database version 9.4.5
-- Dumped by pg_dump version 9.4.0
-- Started on 2015-12-18 23:39:40

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

SET search_path = public, pg_catalog;

--
-- TOC entry 2056 (class 0 OID 123456)
-- Dependencies: 173
-- Data for Name: Subjects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Subjects" (id, name, description, "INN", "KPP", type, "isSystem", "createdAt", "updatedAt") FROM stdin;
1	Lucille	Sit ut enim esse Lorem ea ex qui cillum eu dolor non laborum.	123456	123456	ИП	t	2015-12-08 22:59:36.572+03	2015-12-08 22:59:36.572+03
2	Mckee	Ea veniam ut eu ad est sint occaecat consectetur ex consequat.	123456	123456	Компания	f	2015-12-08 22:59:36.586+03	2015-12-08 22:59:36.586+03
3	Noreen	Labore labore magna commodo ipsum quis.	123456	123456	Физ-лицо	t	2015-12-08 22:59:36.591+03	2015-12-08 22:59:36.591+03
4	Walter	Exercitation irure sit amet non cillum irure excepteur irure.	123456	123456	Физ-лицо	f	2015-12-08 22:59:36.598+03	2015-12-08 22:59:36.598+03
5	Kelley	Velit adipisicing laborum Lorem voluptate exercitation laborum cillum nisi qui cupidatat esse commodo.	123456	123456	ИП	t	2015-12-08 22:59:36.602+03	2015-12-08 22:59:36.602+03
6	Trujillo	Id cupidatat reprehenderit pariatur nostrud minim do mollit laborum id.	123456	123456	Физ-лицо	t	2015-12-08 22:59:36.606+03	2015-12-08 22:59:36.606+03
7	Darlene	Magna nisi consequat laboris amet eiusmod dolore enim exercitation.	123456	123456	Компания	t	2015-12-08 22:59:36.612+03	2015-12-08 22:59:36.612+03
8	Cardenas	Laboris nostrud magna labore deserunt esse veniam quis deserunt.	123456	123456	Физ-лицо	f	2015-12-08 22:59:36.616+03	2015-12-08 22:59:36.616+03
9	Iris	Id mollit laborum ad nostrud irure quis.	123456	123456	Физ-лицо	f	2015-12-08 22:59:36.621+03	2015-12-08 22:59:36.621+03
10	Miranda	Commodo est enim ea aliquip id cillum eu.	123456	123456	Компания	t	2015-12-08 22:59:36.625+03	2015-12-08 22:59:36.625+03
11	Pruitt	Minim est sint pariatur nulla excepteur incididunt do cupidatat incididunt voluptate consectetur Lorem in duis.	123456	123456	Физ-лицо	f	2015-12-08 22:59:36.63+03	2015-12-08 22:59:36.63+03
12	Vickie	Consequat tempor nulla adipisicing dolor ex non eiusmod velit nisi.	123456	123456	Физ-лицо	f	2015-12-08 22:59:36.637+03	2015-12-08 22:59:36.637+03
13	Rosario	Culpa esse ea proident sit adipisicing enim proident qui elit nulla anim voluptate.	123456	123456	Физ-лицо	t	2015-12-08 22:59:36.642+03	2015-12-08 22:59:36.642+03
14	Rachael	Mollit laborum nulla pariatur est aliquip ea elit in minim et amet.	123456	123456	Физ-лицо	f	2015-12-08 22:59:36.646+03	2015-12-08 22:59:36.646+03
15	Tracie	Ex veniam qui pariatur dolor mollit cillum.	123456	123456	ИП	t	2015-12-08 22:59:36.65+03	2015-12-08 22:59:36.65+03
16	Banks	Dolore et magna officia ut anim irure pariatur.	123456	123456	Компания	t	2015-12-08 22:59:36.654+03	2015-12-08 22:59:36.654+03
17	Nellie	Laboris laboris velit labore sint veniam cillum amet voluptate ut exercitation nisi commodo.	123456	123456	Компания	t	2015-12-08 22:59:36.657+03	2015-12-08 22:59:36.657+03
18	Cox	Laboris deserunt ullamco irure sint velit Lorem et quis fugiat sit excepteur commodo do veniam.	123456	123456	Физ-лицо	f	2015-12-08 22:59:36.667+03	2015-12-08 22:59:36.667+03
19	Bonita	Excepteur elit Lorem duis ea commodo dolor reprehenderit.	123456	123456	Компания	f	2015-12-08 22:59:36.673+03	2015-12-08 22:59:36.673+03
20	Goodwin	Nulla aute ipsum amet aliquip labore incididunt est ad ullamco ea.	123456	123456	Компания	t	2015-12-08 22:59:36.676+03	2015-12-08 22:59:36.676+03
21	Cunningham	Deserunt sunt esse labore deserunt elit do consequat.	123456	123456	Физ-лицо	t	2015-12-08 22:59:36.679+03	2015-12-08 22:59:36.679+03
22	Ramsey	Sunt veniam aliquip aliquip do culpa consequat mollit duis ullamco aute.	123456	123456	ИП	f	2015-12-08 22:59:36.683+03	2015-12-08 22:59:36.683+03
23	May	Consequat aliqua qui mollit irure occaecat reprehenderit cillum voluptate in consequat veniam.	123456	123456	ИП	t	2015-12-08 22:59:36.686+03	2015-12-08 22:59:36.686+03
24	Abigail	Culpa nulla cillum qui exercitation amet dolore exercitation esse occaecat sit nulla.	123456	123456	ИП	t	2015-12-08 22:59:36.688+03	2015-12-08 22:59:36.688+03
25	Bradshaw	Esse voluptate est cillum sit reprehenderit aute eiusmod enim do quis nisi voluptate quis.	123456	123456	Компания	f	2015-12-08 22:59:36.691+03	2015-12-08 22:59:36.691+03
26	Hill	Ullamco consectetur consequat culpa velit cupidatat dolore minim voluptate ad.	123456	123456	Физ-лицо	f	2015-12-08 22:59:36.694+03	2015-12-08 22:59:36.694+03
27	Amy	Velit id sint reprehenderit non sit eiusmod pariatur aliqua proident.	123456	123456	Физ-лицо	t	2015-12-08 22:59:36.696+03	2015-12-08 22:59:36.696+03
28	Allison	Ut irure ullamco consequat quis commodo ad nisi cillum adipisicing dolore minim irure fugiat.	123456	123456	Физ-лицо	t	2015-12-08 22:59:36.7+03	2015-12-08 22:59:36.7+03
29	Vivian	Mollit minim et reprehenderit commodo in consequat veniam elit reprehenderit aliquip consectetur Lorem tempor id.	123456	123456	ИП	f	2015-12-08 22:59:36.704+03	2015-12-08 22:59:36.704+03
30	Aisha	Irure do velit pariatur dolor proident.	123456	123456	Физ-лицо	t	2015-12-08 22:59:36.708+03	2015-12-08 22:59:36.708+03
31	Camacho	Occaecat dolor pariatur consectetur culpa exercitation.	123456	123456	Компания	f	2015-12-08 22:59:36.711+03	2015-12-08 22:59:36.711+03
32	Robles	Esse anim ea pariatur esse.	123456	123456	Компания	f	2015-12-08 22:59:36.72+03	2015-12-08 22:59:36.72+03
33	Vera	Culpa eiusmod nisi tempor dolor consectetur laborum ad.	123456	123456	ИП	f	2015-12-08 22:59:36.724+03	2015-12-08 22:59:36.724+03
34	Keller	Sint enim est aute exercitation dolor nisi id duis.	123456	123456	ИП	t	2015-12-08 22:59:36.726+03	2015-12-08 22:59:36.726+03
35	Hillary	Laborum occaecat occaecat est sint ut duis deserunt nisi laborum aliquip quis aliquip labore amet.	123456	123456	Физ-лицо	t	2015-12-08 22:59:36.73+03	2015-12-08 22:59:36.73+03
36	Silvia	Ea dolore dolore magna id ullamco consectetur consequat officia irure ipsum do excepteur amet ex.	123456	123456	ИП	f	2015-12-08 22:59:36.733+03	2015-12-08 22:59:36.733+03
37	Lana	Ea officia dolore elit incididunt fugiat consequat tempor cupidatat nulla Lorem id.	123456	123456	ИП	f	2015-12-08 22:59:36.736+03	2015-12-08 22:59:36.736+03
38	Waters	Nulla ea cillum et aliquip ad pariatur exercitation quis consectetur duis.	123456	123456	ИП	t	2015-12-08 22:59:36.739+03	2015-12-08 22:59:36.739+03
39	Alison	Minim culpa consequat Lorem deserunt.	123456	123456	Физ-лицо	f	2015-12-08 22:59:36.741+03	2015-12-08 22:59:36.741+03
40	Lesa	In id ea sint commodo nisi pariatur ipsum aliquip sit.	123456	123456	Физ-лицо	f	2015-12-08 22:59:36.743+03	2015-12-08 22:59:36.743+03
41	Hale	Anim aute id exercitation ad tempor fugiat eiusmod proident nisi proident ut non.	123456	123456	ИП	t	2015-12-08 22:59:36.745+03	2015-12-08 22:59:36.745+03
42	Frankie	Cupidatat non ullamco quis esse.	123456	123456	ИП	f	2015-12-08 22:59:36.748+03	2015-12-08 22:59:36.748+03
43	Murray	Quis non reprehenderit nisi labore et proident eiusmod non et enim eu elit eu.	123456	123456	Физ-лицо	f	2015-12-08 22:59:36.752+03	2015-12-08 22:59:36.752+03
44	Janie	Magna in elit labore quis eiusmod.	123456	123456	Физ-лицо	f	2015-12-08 22:59:36.756+03	2015-12-08 22:59:36.756+03
45	Townsend	Lorem eiusmod duis nostrud adipisicing et.	123456	123456	Физ-лицо	f	2015-12-08 22:59:36.761+03	2015-12-08 22:59:36.761+03
46	Lizzie	Magna ut ex nulla enim sit magna laborum amet nisi.	123456	123456	Компания	f	2015-12-08 22:59:36.763+03	2015-12-08 22:59:36.763+03
47	Irma	Esse consectetur ipsum eu eu amet eiusmod non id commodo exercitation laboris aliqua velit irure.	123456	123456	Физ-лицо	f	2015-12-08 22:59:36.765+03	2015-12-08 22:59:36.765+03
48	Staci	Duis et non aute mollit.	123456	123456	Компания	t	2015-12-08 22:59:36.768+03	2015-12-08 22:59:36.768+03
49	Latisha	Aute eiusmod aliquip officia ullamco velit tempor.	123456	123456	Физ-лицо	t	2015-12-08 22:59:36.77+03	2015-12-08 22:59:36.77+03
50	Holcomb	Nulla sunt ex reprehenderit do nostrud eu.	123456	123456	ИП	f	2015-12-08 22:59:36.773+03	2015-12-08 22:59:36.773+03
51	Matthews	Exercitation ex aliquip quis quis amet et aute velit ea pariatur cillum do sit.	123456	123456	ИП	t	2015-12-08 22:59:36.776+03	2015-12-08 22:59:36.776+03
52	Mclaughlin	Excepteur ut ex eu ea dolore proident duis mollit ipsum duis deserunt occaecat dolore.	123456	123456	ИП	t	2015-12-08 22:59:36.78+03	2015-12-08 22:59:36.78+03
53	Shawna	Lorem sunt tempor voluptate do.	123456	123456	Физ-лицо	t	2015-12-08 22:59:36.783+03	2015-12-08 22:59:36.783+03
54	Nieves	Duis cillum aute ex aliquip incididunt culpa nulla.	123456	123456	Физ-лицо	t	2015-12-08 22:59:36.787+03	2015-12-08 22:59:36.787+03
55	Luna	Sit sunt dolor deserunt exercitation do amet commodo dolore ipsum cupidatat ea mollit.	123456	123456	Физ-лицо	f	2015-12-08 22:59:36.791+03	2015-12-08 22:59:36.791+03
56	Tricia	Tempor irure culpa sint labore laborum do dolor cupidatat aliquip.	123456	123456	ИП	t	2015-12-08 22:59:36.793+03	2015-12-08 22:59:36.793+03
57	Vance	Eiusmod nisi deserunt eiusmod deserunt sint.	123456	123456	Физ-лицо	t	2015-12-08 22:59:36.797+03	2015-12-08 22:59:36.797+03
58	Janna	Ex pariatur elit eiusmod adipisicing Lorem cupidatat in enim.	123456	123456	ИП	f	2015-12-08 22:59:36.801+03	2015-12-08 22:59:36.801+03
59	Kasey	Amet ex excepteur esse exercitation consectetur ullamco id ullamco reprehenderit non esse mollit exercitation incididunt.	123456	123456	Физ-лицо	f	2015-12-08 22:59:36.807+03	2015-12-08 22:59:36.807+03
60	Julianne	Aliquip eiusmod veniam qui mollit sint ex amet sunt enim sunt mollit officia dolor qui.	123456	123456	Компания	f	2015-12-08 22:59:36.812+03	2015-12-08 22:59:36.812+03
61	Nicholson	Do fugiat aliquip culpa exercitation tempor consequat excepteur culpa exercitation cupidatat magna consequat consectetur proident.	123456	123456	ИП	f	2015-12-08 22:59:36.814+03	2015-12-08 22:59:36.814+03
62	Love	Tempor eiusmod ea laboris eiusmod exercitation occaecat ea magna eiusmod nisi sint minim.	123456	123456	Физ-лицо	f	2015-12-08 22:59:36.818+03	2015-12-08 22:59:36.818+03
63	Robin	Sit commodo consequat enim reprehenderit esse adipisicing nostrud dolore dolor ea enim laboris nulla.	123456	123456	Физ-лицо	t	2015-12-08 22:59:36.82+03	2015-12-08 22:59:36.82+03
64	Audrey	Elit sunt id aliqua non.	123456	123456	Физ-лицо	t	2015-12-08 22:59:36.824+03	2015-12-08 22:59:36.824+03
65	Morton	In sit Lorem occaecat laboris officia ex dolor voluptate voluptate cupidatat.	123456	123456	ИП	f	2015-12-08 22:59:36.827+03	2015-12-08 22:59:36.827+03
66	Rivera	Cupidatat duis cupidatat tempor amet enim amet.	123456	123456	ИП	t	2015-12-08 22:59:36.833+03	2015-12-08 22:59:36.833+03
67	Gwen	Labore veniam deserunt in Lorem.	123456	123456	ИП	t	2015-12-08 22:59:36.841+03	2015-12-08 22:59:36.841+03
68	Josephine	Velit sunt sit deserunt laboris excepteur quis nulla excepteur tempor id.	123456	123456	ИП	t	2015-12-08 22:59:36.845+03	2015-12-08 22:59:36.845+03
69	Dunn	In amet elit nostrud nisi aliquip voluptate adipisicing eiusmod proident deserunt ut consequat aliquip dolore.	123456	123456	Компания	f	2015-12-08 22:59:36.847+03	2015-12-08 22:59:36.847+03
70	Taylor	Irure id elit officia irure irure enim Lorem fugiat tempor eiusmod quis.	123456	123456	Компания	t	2015-12-08 22:59:36.849+03	2015-12-08 22:59:36.849+03
71	Gonzalez	Excepteur consectetur adipisicing cupidatat aliquip excepteur fugiat et commodo do sunt nisi esse consequat reprehenderit.	123456	123456	Физ-лицо	t	2015-12-08 22:59:36.853+03	2015-12-08 22:59:36.853+03
72	Wallace	Eiusmod nostrud ut reprehenderit eu ex reprehenderit adipisicing cupidatat.	123456	123456	Физ-лицо	f	2015-12-08 22:59:36.856+03	2015-12-08 22:59:36.856+03
73	Cannon	Ex esse cupidatat eiusmod id excepteur nostrud et et dolore ex exercitation sint ullamco ut.	123456	123456	Физ-лицо	f	2015-12-08 22:59:36.858+03	2015-12-08 22:59:36.858+03
74	Eleanor	Elit id proident ipsum minim nisi ad do.	123456	123456	Физ-лицо	f	2015-12-08 22:59:36.861+03	2015-12-08 22:59:36.861+03
75	Robertson	Dolor in aliquip elit velit aliqua.	123456	123456	ИП	t	2015-12-08 22:59:36.864+03	2015-12-08 22:59:36.864+03
76	Lily	Officia mollit consectetur pariatur adipisicing ut ex anim culpa mollit culpa.	123456	123456	ИП	t	2015-12-08 22:59:36.868+03	2015-12-08 22:59:36.868+03
77	Bartlett	Velit sit ex ut id veniam quis in consequat deserunt voluptate quis consequat.	123456	123456	Физ-лицо	f	2015-12-08 22:59:36.87+03	2015-12-08 22:59:36.87+03
78	Jerry	Sint Lorem culpa reprehenderit sit Lorem commodo laboris tempor.	123456	123456	Компания	t	2015-12-08 22:59:36.872+03	2015-12-08 22:59:36.872+03
79	Campos	Laborum voluptate et aliquip enim elit incididunt irure Lorem.	123456	123456	Физ-лицо	f	2015-12-08 22:59:36.875+03	2015-12-08 22:59:36.875+03
80	Puckett	Anim sit qui id in fugiat veniam quis incididunt.	123456	123456	Физ-лицо	f	2015-12-08 22:59:36.878+03	2015-12-08 22:59:36.878+03
81	Wiggins	Est officia id eu est laborum incididunt elit magna non et.	123456	123456	Компания	f	2015-12-08 22:59:36.881+03	2015-12-08 22:59:36.881+03
82	Beverley	Quis ut officia veniam cillum elit labore ex nostrud veniam.	123456	123456	Компания	f	2015-12-08 22:59:36.883+03	2015-12-08 22:59:36.883+03
83	Mays	Occaecat anim ad id ullamco officia laboris consectetur aliquip dolore exercitation id laboris aute.	123456	123456	Компания	f	2015-12-08 22:59:36.886+03	2015-12-08 22:59:36.886+03
84	Lilian	In eu officia cupidatat proident officia consectetur labore occaecat irure quis non eu enim anim.	123456	123456	Компания	t	2015-12-08 22:59:36.888+03	2015-12-08 22:59:36.888+03
85	Justine	Consequat laborum fugiat cupidatat sint labore veniam.	123456	123456	Физ-лицо	t	2015-12-08 22:59:36.89+03	2015-12-08 22:59:36.89+03
86	Carolina	Nisi non fugiat excepteur adipisicing sunt do fugiat reprehenderit qui mollit amet.	123456	123456	ИП	f	2015-12-08 22:59:36.893+03	2015-12-08 22:59:36.893+03
87	Mayer	Mollit cupidatat fugiat commodo elit nulla eu minim incididunt laborum reprehenderit.	123456	123456	Физ-лицо	f	2015-12-08 22:59:36.895+03	2015-12-08 22:59:36.895+03
88	Adrian	Commodo nisi nostrud enim sint nostrud laboris nulla qui nostrud eiusmod et aliqua occaecat ea.	123456	123456	Компания	t	2015-12-08 22:59:36.897+03	2015-12-08 22:59:36.897+03
89	Cooke	Do ad irure ut amet anim qui exercitation.	123456	123456	Компания	f	2015-12-08 22:59:36.9+03	2015-12-08 22:59:36.9+03
90	Jenkins	Sit ut cupidatat irure amet.	123456	123456	Компания	f	2015-12-08 22:59:36.904+03	2015-12-08 22:59:36.904+03
91	Aurelia	Laborum velit proident labore fugiat amet aliquip nostrud sint deserunt reprehenderit nisi.	123456	123456	ИП	t	2015-12-08 22:59:36.906+03	2015-12-08 22:59:36.906+03
92	Michael	Ipsum nostrud laborum id laborum proident quis velit non Lorem consequat.	123456	123456	ИП	f	2015-12-08 22:59:36.909+03	2015-12-08 22:59:36.909+03
93	Josie	Est commodo anim quis non laborum nostrud veniam sint.	123456	123456	Компания	f	2015-12-08 22:59:36.911+03	2015-12-08 22:59:36.911+03
94	Lyons	In nisi veniam proident excepteur cupidatat in anim ex duis voluptate aliqua.	123456	123456	Компания	f	2015-12-08 22:59:36.913+03	2015-12-08 22:59:36.913+03
95	Guthrie	Officia esse ut consequat ipsum voluptate adipisicing ullamco deserunt duis fugiat commodo tempor.	123456	123456	Компания	f	2015-12-08 22:59:36.916+03	2015-12-08 22:59:36.916+03
96	Maureen	Ad eiusmod ea ad laborum aute quis eu laboris proident ad ex.	123456	123456	Компания	t	2015-12-08 22:59:36.919+03	2015-12-08 22:59:36.919+03
97	Thompson	Anim proident minim eiusmod nisi elit anim exercitation.	123456	123456	Физ-лицо	f	2015-12-08 22:59:36.926+03	2015-12-08 22:59:36.926+03
98	Maryann	Veniam veniam do cillum commodo fugiat cillum nisi anim ex eu.	123456	123456	ИП	t	2015-12-08 22:59:36.929+03	2015-12-08 22:59:36.929+03
99	Gabrielle	Aliqua ex nulla aute amet pariatur.	123456	123456	ИП	f	2015-12-08 22:59:36.932+03	2015-12-08 22:59:36.932+03
100	Freeman	Anim in nulla aute esse in do.	123456	123456	Компания	f	2015-12-08 22:59:36.936+03	2015-12-08 22:59:36.936+03
102	фывфыв	фы	фыв	фыв	Компания	f	2015-12-12 00:24:14.492+03	2015-12-12 00:24:14.492+03
103	фывфыв	фы	фыв	фыв	Компания	t	2015-12-12 00:24:22.808+03	2015-12-12 00:24:22.808+03
104	фывфыв	фы	фыв	фыв	Компания	t	2015-12-12 00:24:56+03	2015-12-12 00:24:56+03
105	asdf	adsfasdf	asdf	asdf	Компания	f	2015-12-15 22:53:46.729+03	2015-12-15 22:53:46.729+03
\.


--
-- TOC entry 2063 (class 0 OID 123456)
-- Dependencies: 180
-- Data for Name: Accounts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Accounts" (id, name, description, ammount, currency, "createdAt", "updatedAt", "SubjectId") FROM stdin;
\.


--
-- TOC entry 2072 (class 0 OID 0)
-- Dependencies: 179
-- Name: Accounts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Accounts_id_seq"', 1, false);


--
-- TOC entry 2061 (class 0 OID 123456)
-- Dependencies: 178
-- Data for Name: Currencies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Currencies" (id, name, nominal, "createdAt", "updatedAt") FROM stdin;
R123456	Доллар США	1	2015-12-13 15:38:07+03	2015-12-13 15:38:09+03
R123456	Евро	1	2015-12-13 15:38:38+03	2015-12-13 15:38:39+03
\.


--
-- TOC entry 2058 (class 0 OID 123456)
-- Dependencies: 175
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Users" (id, login, password, "firstName", "lastName", phone, "createdAt", "updatedAt") FROM stdin;
1	user	123456b7885f123456e8dd4a6bd53b567a37f98	User	User	asdasd	2015-12-10 23:47:26.715+03	2015-12-10 23:47:21.86+03
\.


--
-- TOC entry 2060 (class 0 OID 123456)
-- Dependencies: 177
-- Data for Name: Favorites; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Favorites" (id, "order", "createdAt", "updatedAt", "SubjectId", "UserId") FROM stdin;
18	0	2015-12-12 16:40:15+03	2015-12-12 16:40:20+03	4	1
20	0	2015-12-12 16:40:15+03	2015-12-12 16:40:20+03	4	1
24	0	2015-12-12 16:40:15+03	2015-12-12 16:40:20+03	4	1
26	0	2015-12-12 16:40:15+03	2015-12-12 16:40:20+03	4	1
27	0	2015-12-12 16:40:15+03	2015-12-12 16:40:20+03	4	1
28	0	2015-12-12 16:40:15+03	2015-12-12 16:40:20+03	4	1
30	0	2015-12-12 16:40:15+03	2015-12-12 16:40:20+03	4	1
31	0	2015-12-12 16:40:15+03	2015-12-12 16:40:20+03	4	1
33	0	2015-12-12 16:40:15+03	2015-12-12 16:40:20+03	4	1
34	0	2015-12-12 16:40:15+03	2015-12-12 16:40:20+03	4	1
35	0	2015-12-12 16:40:15+03	2015-12-12 16:40:20+03	4	1
36	0	2015-12-12 16:40:15+03	2015-12-12 16:40:20+03	4	1
37	0	2015-12-12 16:40:15+03	2015-12-12 16:40:20+03	4	1
38	0	2015-12-12 16:40:15+03	2015-12-12 16:40:20+03	4	1
15	0	2015-12-12 16:40:15+03	2015-12-12 16:40:20+03	1	1
16	0	2015-12-12 16:40:15+03	2015-12-12 16:40:20+03	2	1
17	0	2015-12-12 16:40:15+03	2015-12-12 16:40:20+03	3	1
19	0	2015-12-12 16:40:15+03	2015-12-12 16:40:20+03	5	1
22	0	2015-12-12 16:40:15+03	2015-12-12 16:40:20+03	6	1
23	0	2015-12-12 16:40:15+03	2015-12-12 16:40:20+03	7	1
25	0	2015-12-12 16:40:15+03	2015-12-12 16:40:20+03	8	1
29	0	2015-12-12 16:40:15+03	2015-12-12 16:40:20+03	9	1
32	0	2015-12-12 16:40:15+03	2015-12-12 16:40:20+03	10	1
\.


--
-- TOC entry 2073 (class 0 OID 0)
-- Dependencies: 176
-- Name: Favorites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Favorites_id_seq"', 38, true);


--
-- TOC entry 2065 (class 0 OID 123456)
-- Dependencies: 182
-- Data for Name: Operations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Operations" (id, date, type, "orderNumber", tax, paid, "mustPay", given, "createdAt", "updatedAt", "fromAccountId", "toAccountId") FROM stdin;
\.


--
-- TOC entry 2074 (class 0 OID 0)
-- Dependencies: 181
-- Name: Operations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Operations_id_seq"', 1, false);


--
-- TOC entry 2067 (class 0 OID 123456)
-- Dependencies: 184
-- Data for Name: Rates; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Rates" (id, date, value, nominal, "createdAt", "updatedAt", "currencyId") FROM stdin;
21	2015-12-11 00:00:00+03	69.2151	1.0000	2015-12-13 23:17:57.782+03	2015-12-13 23:17:57.782+03	R123456
22	2015-12-12 00:00:00+03	69.1755	1.0000	2015-12-13 23:17:57.792+03	2015-12-13 23:17:57.792+03	R123456
23	2015-12-11 00:00:00+03	76.0674	1.0000	2015-12-13 23:17:57.825+03	2015-12-13 23:17:57.825+03	R123456
24	2015-12-12 00:00:00+03	75.7472	1.0000	2015-12-13 23:17:57.829+03	2015-12-13 23:17:57.829+03	R123456
29	2015-12-15 00:00:00+03	70.2244	1.0000	2015-12-15 22:32:25.242+03	2015-12-15 22:32:25.242+03	R123456
30	2015-12-15 00:00:00+03	76.9659	1.0000	2015-12-15 22:32:25.28+03	2015-12-15 22:32:25.28+03	R123456
\.


--
-- TOC entry 2075 (class 0 OID 0)
-- Dependencies: 183
-- Name: Rates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Rates_id_seq"', 30, true);


--
-- TOC entry 2076 (class 0 OID 0)
-- Dependencies: 172
-- Name: Subjects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Subjects_id_seq"', 105, true);


--
-- TOC entry 2077 (class 0 OID 0)
-- Dependencies: 174
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Users_id_seq"', 1, true);


-- Completed on 2015-12-18 23:39:40

--
-- PostgreSQL database dump complete
--

