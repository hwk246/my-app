from peewee import SqliteDatabase, TextField, DateTimeField, Model, ForeignKeyField
import datetime

db=SqliteDatabase("data.db")


class User(Model):
    first_name=TextField()
    last_name=TextField()
    password=TextField()

    class Meta:
        database=db

class Notes(Model):
    content=ForeignKeyField(User)
    timestamp=DateTimeField(default=datetime.datetime.now())

    class Meta:
        database=db

def init():
    db.connection()
    db.create_tables([Notes, User], safe=True)
    db.close()

if __name__ == "__main__":
   init()