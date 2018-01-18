# MPRITTER

[![JS Standard Style][standard-image]][standard-url]
[![Dependency Status][depstat-image]][depstat-url]

> Show Timeline, Profile, Search and Post Twitter

## Install

```sh
npm install (in client)
npm run dev (in client)
npm install (in server)
npm start (in server)
```

## Examples

### 
This API can show your timeline


User requests `localhost:3000/tweet` this API will be shown timeline User in data JSON

### Show Profile
This API can show your profile


User requests `localhost:3000/tweet/user/'twitterID'` this API will be shown `twiterID` Profile in data JSON

### Show Result Search
This API can show you result of Search


User requests `localhost:3000/tweet/search?q='dataSearch'` this app will be shown `datSearch` timeline User in data JSON

### Post to Twitter
This API can post to your Twitter


User requests `localhost:3000/tweet/status` and put your `status` in form with name `staus` and this app will be post to your timeline

## Contributing

This API was created with [hacktiv8-northernFox](https://github.com/northern-fox-2017). Please refer to there to understand the codestyle and workflow. Issues and PRs are welcome! 

## License

MIT © [Andrey Amrulloh](http://github.com/andreychuinx)

[standard-url]: http://standardjs.com
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[npm-url]: https://npmjs.org
[npm-image]: https://img.shields.io/npm/v/querymen.svg?style=flat-square


[depstat-url]: https://andreywashere.tumblr.com
[depstat-image]: https://david-dm.org/diegohaz/querymen.svg?style=flat-square