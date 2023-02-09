import redis
pool = redis.ConnectionPool(host='localhost',port=6379,db=0)

r = redis.Redis(host='localhost',port=6379,db=0)
r.set('foo','bar')  # ajout de variable et true en retor si reussite
r.get('foo') # lecture de la valeur de foo

# test Pipelines #
pipe = r.pipeline()
pipe.set('foo',5)
pipe.set('bar',18.5)
pipe.set('blee',"Message")
pipe.execute()

# test PubSub #
p = r.pubsub()
p.subscribe('my-first-channel','my-second-channel')
p.get_message()


