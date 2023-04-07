FROM python:3.8.10

RUN apt-get update
RUN apt-get install python3-pip -y
RUN pip3 install --upgrade pip
RUN pip3 install flask
RUN pip3 install flask-cors
RUN pip3 install redis


COPY . .

ENV FLASK_APP=twitter.py
ENV FLASK_DEBUG=True
ENV FLASK_ENV=development


EXPOSE 5000

CMD ["flask", "run"]