PGDMP                          x            iprwc    11.5    11.5                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false                       1262    17748    iprwc    DATABASE     �   CREATE DATABASE iprwc WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_Netherlands.1252' LC_CTYPE = 'English_Netherlands.1252';
    DROP DATABASE iprwc;
             postgres    false            �            1259    17765 
   bestelling    TABLE     �   CREATE TABLE public.bestelling (
    bestellingid text NOT NULL,
    totaalprijs numeric,
    aantalstuks integer,
    klantid text NOT NULL,
    datum text,
    status text
);
    DROP TABLE public.bestelling;
       public         postgres    false            �            1259    17757    klant    TABLE     �   CREATE TABLE public.klant (
    klantid text NOT NULL,
    email text NOT NULL,
    wachtwoord text NOT NULL,
    voornaam text,
    achternaam text,
    straat text,
    huisnummer text,
    stad text,
    postcode text,
    usertype text
);
    DROP TABLE public.klant;
       public         postgres    false            �            1259    17749    product    TABLE     �   CREATE TABLE public.product (
    productid text NOT NULL,
    naam text NOT NULL,
    beschrijving text,
    afbeeldinglink text,
    prijs numeric NOT NULL,
    voorraad integer NOT NULL
);
    DROP TABLE public.product;
       public         postgres    false            �            1259    17837    producteninbestelling    TABLE     �   CREATE TABLE public.producteninbestelling (
    bestellingid text NOT NULL,
    productid text NOT NULL,
    aantal integer NOT NULL
);
 )   DROP TABLE public.producteninbestelling;
       public         postgres    false                      0    17765 
   bestelling 
   TABLE DATA               d   COPY public.bestelling (bestellingid, totaalprijs, aantalstuks, klantid, datum, status) FROM stdin;
    public       postgres    false    198   3                 0    17757    klant 
   TABLE DATA                  COPY public.klant (klantid, email, wachtwoord, voornaam, achternaam, straat, huisnummer, stad, postcode, usertype) FROM stdin;
    public       postgres    false    197   n                 0    17749    product 
   TABLE DATA               a   COPY public.product (productid, naam, beschrijving, afbeeldinglink, prijs, voorraad) FROM stdin;
    public       postgres    false    196   �                 0    17837    producteninbestelling 
   TABLE DATA               P   COPY public.producteninbestelling (bestellingid, productid, aantal) FROM stdin;
    public       postgres    false    199   �       �
           2606    17772    bestelling bestelling_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.bestelling
    ADD CONSTRAINT bestelling_pkey PRIMARY KEY (bestellingid);
 D   ALTER TABLE ONLY public.bestelling DROP CONSTRAINT bestelling_pkey;
       public         postgres    false    198            �
           2606    17764    klant klant_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.klant
    ADD CONSTRAINT klant_pkey PRIMARY KEY (klantid);
 :   ALTER TABLE ONLY public.klant DROP CONSTRAINT klant_pkey;
       public         postgres    false    197            �
           2606    17756    product product_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (productid);
 >   ALTER TABLE ONLY public.product DROP CONSTRAINT product_pkey;
       public         postgres    false    196            �
           2606    17773 "   bestelling bestelling_klantid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.bestelling
    ADD CONSTRAINT bestelling_klantid_fkey FOREIGN KEY (klantid) REFERENCES public.klant(klantid);
 L   ALTER TABLE ONLY public.bestelling DROP CONSTRAINT bestelling_klantid_fkey;
       public       postgres    false    197    2702    198            �
           2606    17843 =   producteninbestelling producteninbestelling_bestellingid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.producteninbestelling
    ADD CONSTRAINT producteninbestelling_bestellingid_fkey FOREIGN KEY (bestellingid) REFERENCES public.bestelling(bestellingid);
 g   ALTER TABLE ONLY public.producteninbestelling DROP CONSTRAINT producteninbestelling_bestellingid_fkey;
       public       postgres    false    198    199    2704            �
           2606    17848 :   producteninbestelling producteninbestelling_productid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.producteninbestelling
    ADD CONSTRAINT producteninbestelling_productid_fkey FOREIGN KEY (productid) REFERENCES public.product(productid);
 d   ALTER TABLE ONLY public.producteninbestelling DROP CONSTRAINT producteninbestelling_productid_fkey;
       public       postgres    false    196    199    2700               +  x�}��JE1E�=!8��մ�	�@��'�:��ͽ����^Y�b$`d&P�CE+.�$ƷR�s�x����(b�_�,p�2����0��3��a�n�g��)Bį�&���|dW�%����*0���� �B:~!�3��N����s=�ȰMv��[/a�*�N1{$`̖��v5s�Vǿ e�*-�6���VT\�2�����Ue��3[4���O�E�V0
��yo�o~�!�Vʯnԓ��<��TCU�
�S�O�1�T�л;��\�u�]��,��>���ⓈP         [  x�E�MK1�ϳ��B/^�&�z�ҵX<��0v_�t�!I�E��n�����wf�E5��f�ȁ[��L�!�t�g�UR���|���"�
�uؒ����tGb���Z�.#!J9R�ݧ_X4l�4�xK��vQeB�mX�}&?�C�ّ�����$�Tw��#A{�ZB��4���#z������u~9ӑ����F���I)Z�]�����|.�����XI%ߧč��l��[��m(�\69fKUI���R�u=��B��X���#F���.�ݟ����xd��<��쮖h�p�o��K��i���0��Ds!�<�UyBs6��R�^����6)���j�`           x���Ao� ����p�� C%+����6i�Q�C��:����ʿ��$��c��C1ߛ$�0@�"�,M.����$?���L}�Mކ��f�v�!���~K�m��`!����ɠ��%�"	#�(v�0Ι��� GJS���|e���b���S��)d���>3z����Squ��4���E��+�ڏ��yΓ;�#�͚'�E<�'���v�ĎA�4�i��QS���������G������t�����7��m���	h��2W�H⍩ӈB ʹ�!��+KN� )�ky�|�M�1�C��c�nM�6}�s =9�E�T�Pyu�F�e�Fk*QQ�:Gh}�����"�>,R��C�(tQ�
���.�gsE�U�U�wl�Wn;a��z?���tkͲW�S�4�e�"阈��iU�(7�4����$���!�;l����<�8�w���(q�iQrFy�*�ӥrRi��V�S�v�[ͽ�(�|��}ŕ�Э���i]�j9��j���i�� 7�	�         3   x�3��50�5202�52�51�5 CNacc�0Pܐˀ(�1z\\\ �HE     