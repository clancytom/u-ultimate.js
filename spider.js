

const fs = require('fs');
const path = require('path');
const md5 = require('md5');
var cheerio = require('cheerio');

let userData = require('./user.json');
let baseUrl = `https://www.7788.com`;

const superagent = require('superagent');
let cookie = userData.cookie;
let targetUser = userData.user;
let topic = userData.topic;

console.info(`${targetUser}  参与了 7788 网站 下面一些拍卖, 有仇的报仇，有怨的报怨了！！！ o(∩_∩)o 哈哈`)
doSpider();
function doSpider() {
    for (let i = 1; i < 50; i++) {
        let url = `https://www.7788.com/all_3/3/448/?d=448&s=394398&page=${i}`;
        superagent.get(url)
            .set('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3')
            .set('Accept-Encoding', 'gzip, deflate, br')
            .set('Accept-Language', 'en-GB,en;q=0.9,zh-CN;q=0.8,zh;q=0.7')
            .set('Host', 'www.7788.com')
            .set('Cookie', cookie)
            .end((err, res) => {
                if (!!res) {
                    let html = res.text;
                    $ = cheerio.load(html);
                    let tables = $('body').find('table');
                    for (let j = 0; j < 30; j++) {
                        let attrs = tables[j + 6].children[1].children[0].children[3].children[1].children[1].attribs;
                        let title = attrs.title;
                        title = !!title && title.substring(0, title.lastIndexOf('-')).trim().replace(/\*/g, '').replace(/\\/g,'').replace(/\//g,'').replace(/:/g,'');
                        let detailUrl = baseUrl + attrs.href;
                        // console.info(`${url}                  ${title}`);
                        // get detail 
                        superagent.get(detailUrl)
                            .set('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3')
                            .set('Accept-Encoding', 'gzip, deflate, br')
                            .set('Accept-Language', 'en-GB,en;q=0.9,zh-CN;q=0.8,zh;q=0.7')
                            .set('Host', 'www.7788.com')
                            .set('Cookie', cookie)
                            .end((err, res) => {
                                if (!!res) {
                                    let detailInfo = res.text;
                                    if (detailInfo.includes(targetUser)) {

                                        let $ = cheerio.load(detailInfo);
                                        let tables = $('body').find('table');
                                        try {
                                            let goodInfo = tables[6].children[1].children[0].children[3].children;
                                            let userId = tables[8].children[1].children[2].children[1].children[1].children[0].data;
                                            if (userId === targetUser) {
                                                // 底价、最低加价、最高出价、剩余时间 
                                                let floorPrice = goodInfo[11].children[0].data;
                                                let minimumFareIncrease = goodInfo[16].data.trim();
                                                let highestBid = goodInfo[30].children[0].data;
                                                let remainingTime = goodInfo[36].children[0].data.trim();
                                                console.info(`|++++|目前领先|${detailUrl}|${title}|底价：${floorPrice}|最低加价 : ${minimumFareIncrease} |最高出价 : ${highestBid} | 剩余时间 : ${remainingTime}|`)
                                            }
                                            else{
                                                console.info(`|----|被人干掉|${detailUrl}|${title}|`);
                                                fs.writeFile(path.join(process.cwd(), 'html', `${title}.html`), res.text , {encoding : 'utf-8'}, (err) =>{
                                                    err && console.info(err);
                                                }) 
                                            }
                                        } catch (error) {
    
                                        }
                                    }
                                }
                            })
                    }
                    $.html();
                }
            })
    }
}