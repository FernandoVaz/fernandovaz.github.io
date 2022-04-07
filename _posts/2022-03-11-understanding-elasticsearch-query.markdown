---
layout: post
title:  "Understanding ElasticSearch Queries"
date:   2022-03-11 22:40:06 -0300
categories: Java
---

### Elastic Search Kibana ###

Kibana is a dashboard to write queries on an elastic database, and is very useful to test queries before implementing them on any code. Here is a very brief explanation of what everything does:

```
GET idx.anyindex/_search
{
    "query": {
        "bool": {
            "must": [
                {}
            ],
            "must_not": [
                {}
            ],
            "should": [
                {}
            ],
            "filter": [
                {}
            ]
        }
    }
}
```

The idea is, we just compare each query type to a logical operator in order to clear things up when you write queries.

The first syntax that we need to observe is GET idx.anyindex/_search, this means get documents from the index "anyindex".
At the beginning of the query we specify the type of the logical operation resolution "bool", this means if true will get the documents and false will get none of them. In sequence, the code will have four keywords that are fundamental in building the query.

"must" equals to the logical operation of AND, it means that every query inside that keyword must return true in order to must be true.

"must_not" equals to the logical operation NOT

"should" is equals to the logical operation OR

"filter" is equals to the logical operation FILTER (it has not logical operation haha)


### References ###
* [Wikipedia-Timezones]
* [Maaike-Youtube-vid]


[Maaike-Youtube-vid]: youtube.com/watch?v=0XgdX5hDL4U
[Wikipedia-Timezones]: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
[Wikipedia-Generics]: https://en.wikipedia.org/wiki/Generic_programming