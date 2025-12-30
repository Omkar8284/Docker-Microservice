package com.shiv.department.cacheConfig;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/*
   This is the cache store to save the expensive  data of api calls

 */
public class CacheStore {


    private static final Logger logger=LoggerFactory.getLogger(CacheStore.class);


    // This is the singleton instance os the cache config
    private static final CacheStore INSTANCE =new CacheStore();


    //This is the main thread safe concurrent map to store the main cache
    private final Map<String, Object> cache=new ConcurrentHashMap<>();


    // Private constructor to prevent Instantiation
    private CacheStore(){
    };


    /**
     *
     * @return The singleton instance of the cacheStore class so data inconsistency cannot happen
     */
    public static CacheStore getInstance(){
        return INSTANCE;
    }

    /**
     *
     * @param key The key to update or store the response in the cache
     * @param value The value
     */
    public void updateCache(String key, Object value){
        cache.put(key,value);
        logger.info("The Value for key "+key+" is Cached Successfully");
    }

}
