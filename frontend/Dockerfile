FROM httpd:2.4

RUN mkdir sites-enabled

COPY ./setup/conf/httpd.conf /usr/local/apache2/conf/httpd.conf
COPY ./setup/sites-enabled/ /usr/local/apache2/sites-enabled
COPY ./code/ /usr/local/apache2/htdocs
