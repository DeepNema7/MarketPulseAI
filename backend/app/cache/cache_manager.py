import time


cache_storage = {}

CACHE_TIME = 60


def get_cache(key: str):

    data = cache_storage.get(key)


    if not data:

        print("CACHE MISS ❌")

        return None


    if time.time() - data["time"] > CACHE_TIME:

        del cache_storage[key]

        print("CACHE EXPIRED ⏳")

        return None


    print("CACHE HIT ⚡")

    return data["value"]



def set_cache(
    key: str,
    value
):

    cache_storage[key] = {

        "value": value,

        "time": time.time()

    }


    print("CACHE SAVED ✅") 