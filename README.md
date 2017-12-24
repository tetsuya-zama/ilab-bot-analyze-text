# ilab-bot-text-analyze

## 概要

ilab-botで使用するための形態素解析＆感情分析関数

## セットアップ

### Google Cloud Platform(GCP)の設定

Google Cloud Platformでプロジェクトを作成し、Google Cloud Natural Language APIを有効にする

### GCPのサービスアカウント作成＆認証用jsonの設置

GCPのサービスアカウントを作成し、json形式の認証ファイルを作成する。

作成されたファイルを"auth.json"とし、プロジェクトディレクタリ直下に設置する。

### lambda実行時環境変数の設定

lambda実行時の環境変数として

```bash
GOOGLE_APPLICATION_CREDENTIALS=./auth.json
```

を設定する。

Cloud9上でLocal Functionsとして実行する場合の設定方法はtemplate.yamlを参照。

## 仕様

### eventサンプル

```json
{
    "message": "ありがとう！！すごく助かったよ！！"
}
```

### 戻り値サンプル

```json
{
    "sentences": [
        {
            "text": {
                "content": "ありがとう！！",
                "beginOffset": -1
            },
            "sentiment": {
                "magnitude": 0.6000000238418579,
                "score": 0.6000000238418579
            }
        },
        {
            "text": {
                "content": "すごく助かったよ！！",
                "beginOffset": -1
            },
            "sentiment": {
                "magnitude": 0.8999999761581421,
                "score": 0.8999999761581421
            }
        }
    ],
    "tokens": [
        {
            "text": {
                "content": "ありがとう",
                "beginOffset": -1
            },
            "partOfSpeech": {
                "tag": "X",
                "aspect": "ASPECT_UNKNOWN",
                "case": "CASE_UNKNOWN",
                "form": "FORM_UNKNOWN",
                "gender": "GENDER_UNKNOWN",
                "mood": "MOOD_UNKNOWN",
                "number": "NUMBER_UNKNOWN",
                "person": "PERSON_UNKNOWN",
                "proper": "NOT_PROPER",
                "reciprocity": "RECIPROCITY_UNKNOWN",
                "tense": "TENSE_UNKNOWN",
                "voice": "VOICE_UNKNOWN"
            },
            "dependencyEdge": {
                "headTokenIndex": 0,
                "label": "ROOT"
            },
            "lemma": "ありがとう"
        },
        {
            "text": {
                "content": "！",
                "beginOffset": -1
            },
            "partOfSpeech": {
                "tag": "PUNCT",
                "aspect": "ASPECT_UNKNOWN",
                "case": "CASE_UNKNOWN",
                "form": "FORM_UNKNOWN",
                "gender": "GENDER_UNKNOWN",
                "mood": "MOOD_UNKNOWN",
                "number": "NUMBER_UNKNOWN",
                "person": "PERSON_UNKNOWN",
                "proper": "NOT_PROPER",
                "reciprocity": "RECIPROCITY_UNKNOWN",
                "tense": "TENSE_UNKNOWN",
                "voice": "VOICE_UNKNOWN"
            },
            "dependencyEdge": {
                "headTokenIndex": 0,
                "label": "P"
            },
            "lemma": "！"
        },
        {
            "text": {
                "content": "！",
                "beginOffset": -1
            },
            "partOfSpeech": {
                "tag": "PUNCT",
                "aspect": "ASPECT_UNKNOWN",
                "case": "CASE_UNKNOWN",
                "form": "FORM_UNKNOWN",
                "gender": "GENDER_UNKNOWN",
                "mood": "MOOD_UNKNOWN",
                "number": "NUMBER_UNKNOWN",
                "person": "PERSON_UNKNOWN",
                "proper": "NOT_PROPER",
                "reciprocity": "RECIPROCITY_UNKNOWN",
                "tense": "TENSE_UNKNOWN",
                "voice": "VOICE_UNKNOWN"
            },
            "dependencyEdge": {
                "headTokenIndex": 0,
                "label": "P"
            },
            "lemma": "！"
        },
        {
            "text": {
                "content": "すごく",
                "beginOffset": -1
            },
            "partOfSpeech": {
                "tag": "ADJ",
                "aspect": "ASPECT_UNKNOWN",
                "case": "CASE_UNKNOWN",
                "form": "GERUND",
                "gender": "GENDER_UNKNOWN",
                "mood": "MOOD_UNKNOWN",
                "number": "NUMBER_UNKNOWN",
                "person": "PERSON_UNKNOWN",
                "proper": "NOT_PROPER",
                "reciprocity": "RECIPROCITY_UNKNOWN",
                "tense": "TENSE_UNKNOWN",
                "voice": "VOICE_UNKNOWN"
            },
            "dependencyEdge": {
                "headTokenIndex": 4,
                "label": "ADVMOD"
            },
            "lemma": "すごく"
        },
        {
            "text": {
                "content": "助かっ",
                "beginOffset": -1
            },
            "partOfSpeech": {
                "tag": "VERB",
                "aspect": "ASPECT_UNKNOWN",
                "case": "CASE_UNKNOWN",
                "form": "GERUND",
                "gender": "GENDER_UNKNOWN",
                "mood": "MOOD_UNKNOWN",
                "number": "NUMBER_UNKNOWN",
                "person": "PERSON_UNKNOWN",
                "proper": "NOT_PROPER",
                "reciprocity": "RECIPROCITY_UNKNOWN",
                "tense": "TENSE_UNKNOWN",
                "voice": "VOICE_UNKNOWN"
            },
            "dependencyEdge": {
                "headTokenIndex": 4,
                "label": "ROOT"
            },
            "lemma": "助かっ"
        },
        {
            "text": {
                "content": "た",
                "beginOffset": -1
            },
            "partOfSpeech": {
                "tag": "VERB",
                "aspect": "ASPECT_UNKNOWN",
                "case": "CASE_UNKNOWN",
                "form": "FINAL_ENDING",
                "gender": "GENDER_UNKNOWN",
                "mood": "MOOD_UNKNOWN",
                "number": "NUMBER_UNKNOWN",
                "person": "PERSON_UNKNOWN",
                "proper": "NOT_PROPER",
                "reciprocity": "RECIPROCITY_UNKNOWN",
                "tense": "PAST",
                "voice": "VOICE_UNKNOWN"
            },
            "dependencyEdge": {
                "headTokenIndex": 4,
                "label": "AUX"
            },
            "lemma": "た"
        },
        {
            "text": {
                "content": "よ",
                "beginOffset": -1
            },
            "partOfSpeech": {
                "tag": "PRT",
                "aspect": "ASPECT_UNKNOWN",
                "case": "CASE_UNKNOWN",
                "form": "FORM_UNKNOWN",
                "gender": "GENDER_UNKNOWN",
                "mood": "MOOD_UNKNOWN",
                "number": "NUMBER_UNKNOWN",
                "person": "PERSON_UNKNOWN",
                "proper": "NOT_PROPER",
                "reciprocity": "RECIPROCITY_UNKNOWN",
                "tense": "TENSE_UNKNOWN",
                "voice": "VOICE_UNKNOWN"
            },
            "dependencyEdge": {
                "headTokenIndex": 4,
                "label": "PRT"
            },
            "lemma": "よ"
        },
        {
            "text": {
                "content": "！",
                "beginOffset": -1
            },
            "partOfSpeech": {
                "tag": "PUNCT",
                "aspect": "ASPECT_UNKNOWN",
                "case": "CASE_UNKNOWN",
                "form": "FORM_UNKNOWN",
                "gender": "GENDER_UNKNOWN",
                "mood": "MOOD_UNKNOWN",
                "number": "NUMBER_UNKNOWN",
                "person": "PERSON_UNKNOWN",
                "proper": "NOT_PROPER",
                "reciprocity": "RECIPROCITY_UNKNOWN",
                "tense": "TENSE_UNKNOWN",
                "voice": "VOICE_UNKNOWN"
            },
            "dependencyEdge": {
                "headTokenIndex": 4,
                "label": "P"
            },
            "lemma": "！"
        },
        {
            "text": {
                "content": "！",
                "beginOffset": -1
            },
            "partOfSpeech": {
                "tag": "PUNCT",
                "aspect": "ASPECT_UNKNOWN",
                "case": "CASE_UNKNOWN",
                "form": "FORM_UNKNOWN",
                "gender": "GENDER_UNKNOWN",
                "mood": "MOOD_UNKNOWN",
                "number": "NUMBER_UNKNOWN",
                "person": "PERSON_UNKNOWN",
                "proper": "NOT_PROPER",
                "reciprocity": "RECIPROCITY_UNKNOWN",
                "tense": "TENSE_UNKNOWN",
                "voice": "VOICE_UNKNOWN"
            },
            "dependencyEdge": {
                "headTokenIndex": 4,
                "label": "P"
            },
            "lemma": "！"
        }
    ],
    "entities": [],
    "categories": [],
    "documentSentiment": {
        "magnitude": 1.600000023841858,
        "score": 0.800000011920929
    },
    "language": "ja"
}
```
