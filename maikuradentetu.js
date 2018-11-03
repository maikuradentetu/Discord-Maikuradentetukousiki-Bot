
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
   console.log('マイクラ電鉄公式Botがログインしました。');

 client.user.setActivity('ヘルプは /mkousikihelp', {
    type: 'PLAYING'
 });
  // ステータスに ゲームをプレイ中 を表示
  /**********************************
    typeの値 -> https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=setActivity
      'PLAYING': 〇〇 をプレイ中
      'STREAMING': 〇〇 を配信中
      'WATCHING': 〇〇 を視聴中
      'LISTENING': Listening to 〇〇
  ***********************************/
  // setGameメソッドは廃止予定です。

}); // readyイベントここまで
//変数指定
msg = 'https://cdn.discordapp.com/attachments/493202186897981442/506083666309545984/6759f53445846fb6.png'
umaru = 'https://cdn.discordapp.com/attachments/493202186897981442/506096083395674132/umaru.png'
umaru2 = 'https://cdn.discordapp.com/attachments/493202186897981442/506097510687965184/umaru2.png'
version = '1.0'

client.on('message', message => {
   if (message.content === ('maikuradentetu:test')) {
      message.channel.send('＜テスト情報＞');
      message.channel.send('Loaning Now');
      message.channel.send('Loaning Now');
      message.channel.send('Loaning Now');
      message.channel.send('Loaning Now');
      message.channel.send('Loaning Now');
      message.channel.send('テスト完了');
      message.channel.send('テスト終了');
    }
    
   if (message.content === ('m:shutdown')) {
      message.channel.send('＜テスト情報＞');
      message.channel.send(client.destroy);
   }
   
   if (message.content === ('/mtest')) {
      message.channel.send({ 
        embed: {
            title: 'マイクラ電鉄公式Bot テスト',
            color: 0x4286f4,
            timestamp: new Date(),
            "footer": {
              "icon_url": "https://cdn.discordapp.com/avatars/473670452938670101/410790c34e7cc821af0675c04151fb8e.png",
              "text": "by マイクラ電鉄"
            },
            "image": {
               "url": msg,
            },
        }
      })
   }

});

client.on('message', message => {

 if (message.content === ('/mkousikihelp')) {
   message.channel.send({ 
        embed: {
            title: 'マイクラ電鉄公式Bot ヘルプ',
            color: 0x4286f4,
            timestamp: new Date(),
            "footer": {
              "icon_url": "https://cdn.discordapp.com/avatars/473670452938670101/410790c34e7cc821af0675c04151fb8e.png",
              "text": "by マイクラ電鉄"
            },
            fields: [
                {
                    name: '``中身は未完成だぞぉ！``',
                    value:'^^',
                },
                {
                    name: '``/umaru``',
                    value:'みんなだいすき！うまるちゃん！！',
                },
                {
                    name: '``/scp``',
                    value:'SCP紹介！！',
                },
                {
                    name: '``/join``',
                    value:'Botの招待URLを確認できます。',
                },
                {
                    name: '``中身は未完成だぞぉ！``',
                    value:'^^',
                },
                {
                    name: '``中身は未完成だぞぉ！``',
                    value:'^^',
                }
            ]
        }
    })
   //message.channel.send(`${message.author.username} 　　察　　　　し　　　　て　　　　く　　　　だ　　　　さ　　　　い`)
 }
 
 if (message.content === ('/version')) {
   message.channel.send({ 
        embed: {
            color: 0x4286f4,
            timestamp: new Date(),
            "footer": {
              "icon_url": "https://cdn.discordapp.com/avatars/473670452938670101/410790c34e7cc821af0675c04151fb8e.png",
              "text": "by マイクラ電鉄"
            },
            fields: [
                {
                    name: '現在のバージョン',
                    value:version,
                }
            ]
        }
    })
 }
 
 if (message.content === ('/join')) {
   message.channel.send({ 
        embed: {
            color: 0x4286f4,
            timestamp: new Date(),
            "footer": {
              "icon_url": "https://cdn.discordapp.com/avatars/473670452938670101/410790c34e7cc821af0675c04151fb8e.png",
              "text": "by マイクラ電鉄"
            },
            fields: [
                {
                    name: '↓Botの招待URL↓',
                    value:'https://discordapp.com/api/oauth2/authorize?client_id=505923155689472000&permissions=8&scope=bot',
                }
            ]
        }
    })
 }

 if (message.content === ('/umaru')) {
   message.channel.send({ 
        embed: {
            title: 'マイクラ電鉄公式Bot-うまるちゃん',
            color: 0x4286f4,
            timestamp: new Date(),
            "footer": {
              "icon_url": "https://cdn.discordapp.com/avatars/473670452938670101/410790c34e7cc821af0675c04151fb8e.png",
              "text": "by マイクラ電鉄"
            },
            fields: [
                {
                    name: '``/umaru-gazouie``',
                    value:'うまるちゃんの画像(家)',
                },
                {
                    name: '``/umaru-gazousoto``',
                    value:'うまるちゃんの画像(外)',
                },
                {
                    name: '``...``',
                    value:'...',
                }
            ]
        }
    })
 }
 
 if (message.content === ('/umaru-gazouie')) {
   message.channel.send({ 
        embed: {
            title: 'マイクラ電鉄公式Bot-うまるちゃん画像(家)',
            color: 0x4286f4,
            timestamp: new Date(),
            "footer": {
              "icon_url": "https://cdn.discordapp.com/avatars/473670452938670101/410790c34e7cc821af0675c04151fb8e.png",
              "text": "by マイクラ電鉄"
            },
            "image": {
               "url": umaru,
            },
        }
    })
 }
 
 if (message.content === ('/umaru-gazousoto')) {
   message.channel.send({ 
        embed: {
            title: 'マイクラ電鉄公式Bot-うまるちゃん画像(外)',
            color: 0x4286f4,
            timestamp: new Date(),
            "footer": {
              "icon_url": "https://cdn.discordapp.com/avatars/473670452938670101/410790c34e7cc821af0675c04151fb8e.png",
              "text": "by マイクラ電鉄"
            },
            "image": {
               "url": umaru2,
            },
        }
    })
 }
 

 if (message.content === ('/scp')) {
   message.channel.send({ 
        embed: {
            title: 'SCP',
            color: 0x4286f4,
            timestamp: new Date(),
            "footer": {
              "icon_url": "https://cdn.discordapp.com/avatars/473670452938670101/410790c34e7cc821af0675c04151fb8e.png",
              "text": "by マイクラ電鉄"
            },
            fields: [
                {
                    name: '``/scp-jp``',
                    value:'SCP日本支部です(実装してません)',
                },
                {
                    name: '``/scp-joke``',
                    value:'ジョークSCP紹介です(実装してません)',
                },
                {
                    name: '``/scp-173``',
                    value:'SCP-173です',
                }
            ]
        }
    })
 }
 
 if (message.content === ('/scp-jp')) {
   message.channel.send({ 
        embed: {
            title: 'SCP日本支部',
            color: 0x4286f4,
            timestamp: new Date(),
            "footer": {
              "icon_url": "https://cdn.discordapp.com/avatars/473670452938670101/410790c34e7cc821af0675c04151fb8e.png",
              "text": "by マイクラ電鉄"
            },
            fields: [
                {
                    name: '``/scp-548-JP``',
                    value:'SCP-548-JPです(実装してません)',
                }
            ]
        }
    })
 }
 
 if (message.content === ('/scp-548-JP')) {
   message.channel.send({ 
        embed: {
            title: 'SCP日本支部',
            color: 0x4286f4,
            timestamp: new Date(),
            "footer": {
              "icon_url": "https://cdn.discordapp.com/avatars/473670452938670101/410790c34e7cc821af0675c04151fb8e.png",
              "text": "by マイクラ電鉄"
            },
            fields: [
                {
                    name: 'アイテム番号:',
                    value:'SCP-548-JP',
                },
                {
                    name: 'オブジェクトクラス:',
                    value:'~~Safe~~  Neutralized',
                },
                {
                    name: '特別収容プロトコル:',
                    value:'SCP-548-JPはサイト-81██内の低危険度物品収容ロッカーに収容されています。SCP-548-JPを用いた実験の際はセキュリティクリアランス2以上の職員1名の許可を得た上で、実施場所は外壁に防音加工が施されたサイトｰ81██の第3中庭に限定します。また雨天時は速やかにSCP-548-JP-Aを発生させてください。',
                },
                {
                    name: '説明:',
                    value:'SCP-548-JPは一般で販売されている物と同様のビニール傘です。全体的に細かい傷や汚れなどの経年劣化が見て取れますが、それ以外に外見や構造について特筆すべきものはありません。SCP-548-JPの異常性は傘布へ雨滴の接触が持続した時に発生します。雨滴以外の液体、水滴では異常性は発生しません。SCP-548-JPの傘布へ雨滴の接触が持続した際に、その水滴と傘布の接触時に発生する雨音はピアノの音色に変化し、その旋律はショパンの「練習曲作品10第3番ホ長調」1と一致します(以下、SCP-548-JPを使用している人物を被験者とし、この現象をSCP-548-JP-Aと表記します)。実際に傘布へ水滴が接触し本来の雨音が発生する筈のタイミングとSCP-548-JP-Aが発生するタイミングには、0.7秒から2秒ほどのラグが存在し、その間に音の変換、あるいは一致させている楽曲の旋律に合わせているものと推測されます。室内に入る、天候が回復するなどして傘布への雨滴の接触が中止される、あるいは楽曲を再現できないほど減少した場合、SCP-548-JP-Aは楽曲の途中であっても終了し、雨音は通常のものに戻ります。SCP-548-JP-Aが終了した後、傘布へ雨滴の接触が継続していた場合、SCP-548-JPへ向けて口頭で楽曲のリクエストを行うと、要望に即したSCP-548-JP-Aが発生します。SCP-548-JP-Aは音響分析の結果、発生する度に僅かながら技術の上達が確認されています。SCP-548-JPへ向け演奏の難易度が高い曲をリクエストした場合、SCP-548-JP-Aは発生しますがその旋律は乱れがちです。しかし、演奏技術が向上するにつれ旋律の乱れは減少し、最終的には完全に原曲の旋律と一致します。また、SCP-548-JP-A終了後、拍手や賛辞の言葉をSCP-548-JPへ向けて送った後、SCP-548-JP-Aのリクエストを行うと、発生するSCP-548-JP-Aの技術上達率が3倍から5倍に跳ね上がり、加えてSCP-548-JP-Aを聴取した被験者はその音色に「嬉しそう」「楽しそう」といった印象を受けます。反対にSCP-548-JPへ向け罵声などを送った場合、次のSCP-548-JP-Aの音色は乱雑なものとなり、場合によってはSCP-548-JP-Aの内容のリクエストを無視します。このことからSCP-548-JPには自我が存在する可能性があります。SCP-548-JPは19██/█/█に██県█市で発生した交通事故の現場で発見されました。現場検証時に天候は雨だったためにSCP-548-JPの異常性が発露、警察に潜入していたエージェントが担当だったため速やかに収容へ至りました。この時、現場に居合わせた野次馬の一人がSCP-548-JP-Aを聞き肯定的な意見を述べた際、SCP-548-JP-Aの演奏技術が向上しました。当時SCP-548-JP-Aを聞いた野次馬および警察関係者にはAクラス記憶処理を施しました。SCP-548-JPは被害者であった女性(氏名███、当時10歳)の持ち物であったこと、当時被害者はピアノのコンクールに向かう道中に事故に遭ったこと、「練習曲作品10第3番ホ長調」は彼女のコンクールでの課題曲であったことがわかっています。',
                }
            ]
        }
    }).catch(console.error)
 }
 
 if (message.content === ('/scp-173')) {
   message.channel.send({ 
        embed: {
            title: 'SCP-173',
            color: 0x4286f4,
            timestamp: new Date(),
            "footer": {
              "icon_url": "https://cdn.discordapp.com/avatars/473670452938670101/410790c34e7cc821af0675c04151fb8e.png",
              "text": "by マイクラ電鉄"
            },
            fields: [
                {
                    name: 'アイテム番号:',
                    value:'SCP-173',
                },
                {
                    name: 'オブジェクトクラス:',
                    value:'Euclid',
                },
                {
                    name: '特別収容プロトコル:',
                    value:'SCP-173は常に施錠されたコンテナに保管されています。財団職員がSCP-173のコンテナに入室しなければならない場合は、必ず3人以上で入室し、入室後にドアは施錠されます。職員がコンテナから全員退室し再び施錠するまで、常に入室した職員のうち2人はSCP-173を注視し続けてください。',
                }
            ]
        }
    })
 }
});
client.login('NTA1OTIzMTU1Njg5NDcyMDAw.Drapyg.-jrPCCu34riTpwMG3wGQwLeMOoc');