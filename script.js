const clubList = {
    5: [
        { name: "レアル・マドリード", flag: "🇪🇸" },
        { name: "バルセロナ", flag: "🇪🇸" },
        { name: "マンチェスター・シティ", flag: "🇬🇧" },
        { name: "アーセナル", flag: "🇬🇧" },
        { name: "リバプール", flag: "🇬🇧" },
        { name: "マンチェスター・ユナイテッド", flag: "🇬🇧" },
        { name: "チェルシー", flag: "🇬🇧" },
        { name: "インテル・ミラノ", flag: "🇮🇹" },
        { name: "ACミラン", flag: "🇮🇹" },
        { name: "ユベントス", flag: "🇮🇹" },
        { name: "バイエルン・ミュンヘン", flag: "🇩🇪" },
        { name: "パリ・サンジェルマン", flag: "🇫🇷" }
    ],
    4: [
        { name: "アストン・ヴィラ", flag: "🇬🇧" },
        { name: "ブライトン", flag: "🇬🇧" },
        { name: "ニューカッスル", flag: "🇬🇧" },
        { name: "クリスタル・パレス", flag: "🇬🇧" },
        { name: "ドルトムント", flag: "🇩🇪" },
        { name: "トッテナム", flag: "🇬🇧" },
        { name: "リーズ・ユナイテッド", flag: "🇬🇧" },
        { name: "ドルトムント", flag: "🇩🇪" },
        { name: "レヴァークーゼン", flag: "🇩🇪" },
        { name: "RBライプツィヒ", flag: "🇩🇪" },
        { name: "フランクフルト", flag: "🇩🇪" },
        { name: "アトレティコ・マドリード", flag: "🇪🇸" },
        { name: "レアル・ソシエダ", flag: "🇪🇸" },
        { name: "レアル・ベティス", flag: "🇪🇸" },
        { name: "ASローマ", flag: "🇮🇹" },
        { name: "アタランタ", flag: "🇮🇹" },
        { name: "ナポリ", flag: "🇮🇹" },
        { name: "マルセイユ", flag: "🇫🇷" },
        { name: "ASモナコ", flag: "🇫🇷" },
        { name: "ベンフィカ", flag: "🇵🇹" },
        { name: "スポルティングCP", flag: "🇵🇹" },
        { name: "フェイエノールト", flag: "🇳🇱" },
        { name: "アヤックス", flag: "🇳🇱" },
        { name: "ガラタサライ", flag: "🇹🇷" },

    ],
    3: [
        { name: "ヴィッセル神戸", flag: "🇯🇵" },
        { name: "浦和レッズ", flag: "🇯🇵" },
        { name: "鹿島アントラーズ", flag: "🇯🇵" },
        { name: "ガンバ大阪", flag: "🇯🇵" },
        { name: "川崎フロンターレ", flag: "🇯🇵" },
        { name: "横浜F・マリノス", flag: "🇯🇵" },
        { name: "サンフレッチェ広島", flag: "🇯🇵" },
        { name: "京都サンガ", flag: "🇯🇵" },
        { name: "FC東京", flag: "🇯🇵" },
        { name: "町田ゼルビア", flag: "🇯🇵" },
        { name: "東京ヴェルディ", flag: "🇯🇵" },
        { name: "名古屋グランパス", flag: "🇯🇵" },
    ],
    2: [
        { name: "ファジアーノ岡山", flag: "🇯🇵" },
        { name: "RB大宮", flag: "🇯🇵" },
        { name: "サガン鳥栖", flag: "🇯🇵" },
        { name: "コンサドーレ札幌", flag: "🇯🇵" },
        { name: "愛媛FC", flag: "🇯🇵" },
        { name: "FC今治", flag: "🇯🇵" },
        { name: "ベガルタ仙台", flag: "🇯🇵" },
        { name: "栃木シティ", flag: "🇯🇵" },
        { name: "徳島ヴォルティス", flag: "🇯🇵" },
        { name: "セレッソ大阪", flag: "🇯🇵" },
        { name: "水戸ホーリーホック", flag: "🇯🇵" },
        { name: "ジェフユナイテッド千葉", flag: "🇯🇵" },
        { name: "V・ファーレン長崎", flag: "🇯🇵" },
        { name: "アビスパ福岡", flag: "🇯🇵" },
        { name: "ジュビロ磐田", flag: "🇯🇵" },
        { name: "湘南ベルマーレ", flag: "🇯🇵" },
        { name: "横浜FC", flag: "🇯🇵" },
        { name: "アルビレックス新潟", flag: "🇯🇵" },
        { name: "高知ユナイテッドSC", flag: "🇯🇵" },
        { name: "ブラウブリッツ秋田", flag: "🇯🇵" },
    ],
    1: [
        { name: "J3クラブ", flag: "⚽" },
        { name: "JFLクラブ", flag: "🏃" }
    ]
};

const rates = {
    rookie: [
        { star: 1, chance: 40, story: "まずは下積みから！" },
        { star: 2, chance: 32, story: "才能の片鱗を見せろ！！" },
        { star: 3, chance: 20, story: "超高校級、期待のJデビュー！！" },
        { star: 4, chance: 7,  story: "超新星！日本中が注目！" },
        { star: 5, chance: 1,  story: "【伝説の始まり】10代でメガクラブ移籍！！" }
    ],
    mid: [
        { star: 1, chance: 25,  story: "怪我でキャリア急転落…" },
        { star: 2, chance: 30, story: "再起をかけた移籍" },
        { star: 3, chance: 27.5, story: "堅実にステップアップ！！" },
        { star: 4, chance: 12.5, story: "強豪で主力として活躍！！" },
        { star: 5, chance: 5, story: "ついに夢のメガクラブへ！！" }
    ],
    vet: [
        { star: 1, chance: 15, story: "静かにキャリアの幕を下ろす" },
        { star: 2, chance: 25, story: "古巣への凱旋復帰！" },
        { star: 3, chance: 32.5, story: "クラブの精神的支柱へ！！" },
        { star: 4, chance: 17.5, story: "まだまだトップレベルでやれる！！" },
        { star: 5, chance: 10, story: "遅咲きの侍、そして伝説へ…" }
    ]
};

document.getElementById('draw-btn').addEventListener('click', () => {
    const selectedStage = document.getElementById('career-stage').value;
    const stageData = rates[selectedStage];

    // 1. まず「星の数（レア度）」を確率通りに抽選する
    const random = Math.floor(Math.random() * 100);
    let cumulativeChance = 0;
    let resultStar = 1;
    let resultStory = "";

    for (const rate of stageData) {
        cumulativeChance += rate.chance;
        if (random < cumulativeChance) {
            resultStar = rate.star;
            resultStory = rate.story;
            break;
        }
    }

    // 2. 選ばれた星の中から、さらにクラブを一つ選ぶ
    const possibleClubs = clubList[resultStar];
    const randomClubIndex = Math.floor(Math.random() * possibleClubs.length);
    const finalClub = possibleClubs[randomClubIndex];

    // 3. 【超重要】当たった「星の数」に合わせて、納得感のあるゴール数・アシスト数を作る！
    let goals = 0;
    let assists = 0;
    let scoutComment = "";

    if (resultStar === 5) {
        // 星5: ゴール15〜35、アシスト10〜20（圧倒的な成績）
        goals = Math.floor(Math.random() * 21) + 15;
        assists = Math.floor(Math.random() * 11) + 10;
        scoutComment = "🔥 ワールドクラスの大活躍！世界中が熱視線！";
    } else if (resultStar === 4) {
        // 星4: ゴール10〜20、アシスト5〜15（かなり優秀な成績）
        goals = Math.floor(Math.random() * 11) + 10;
        assists = Math.floor(Math.random() * 11) + 5;
        scoutComment = "✨ 素晴らしいシーズン！！";
    } else if (resultStar === 3) {
        // 星3: ゴール5〜15、アシスト3〜8（レギュラークラス）
        goals = Math.floor(Math.random() * 11) + 5;
        assists = Math.floor(Math.random() * 6) + 3;
        scoutComment = "📊 安定した活躍。実力通りの評価だ。";
    } else if (resultStar === 2) {
        // 星2: ゴール2〜7、アシスト1〜4（少し物足りない）
        goals = Math.floor(Math.random() * 6) + 2;
        assists = Math.floor(Math.random() * 4) + 1;
        scoutComment = "🌱 まずまずの成績。ここからの飛躍に期待。";
    } else {
        // 星1: ゴール0〜5、アシスト0〜3（不調、または出番なし）
        goals = Math.floor(Math.random() * 6);
        assists = Math.floor(Math.random() * 4);
        scoutComment = "🌧️ 厳しいシーズン…ここから這い上がれ！";
    }

    // 4. 画面の文字を書き換える
    document.getElementById('goals').innerText = goals;
    document.getElementById('assists').innerText = assists;
    document.getElementById('scout-comment').innerText = scoutComment;
    document.getElementById('club-name').innerText = finalClub.name;
    document.getElementById('country-flag').innerText = finalClub.flag;
    document.getElementById('rarity').innerText = "★".repeat(resultStar);
    document.getElementById('story-text').innerText = resultStory;
    
// ★SNSシェア用のテキスト作成（共通）★
    const stageName = document.getElementById('career-stage').options[document.getElementById('career-stage').selectedIndex].text.split(' ')[1];
    // サイトのURLを後で自分のGitHub PagesのURLに変更すると、友達が直接サイトに飛べるようになります！
    const siteUrl = "https://あなたのGitHubユーザー名.github.io/soccer-career/"; 
    const text = `今季【${goals}ゴール ${assists}アシスト】の成績で\n${stageName}として「${finalClub.name} ${finalClub.flag}」へ移籍決定！\nレア度：${"★".repeat(resultStar)}\n『${resultStory}』\n#俺のサッカーキャリア\n${siteUrl}`;

    // 𝕏 (Twitter) 用のリンク
    document.getElementById('share-link-x').href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    
    // LINE用のリンク
    document.getElementById('share-link-line').href = `https://line.me/R/msg/text/?${encodeURIComponent(text)}`;

    document.getElementById('result-area').classList.remove('hidden');
});