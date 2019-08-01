#3rd Party Dispute API

> ###生成PayPal-Auth-Assertion标头
> nodejs 方式生成

>>auth1:
>>>eyJhbGciOiJub25lIn0==  

>>auth2:
>>>eyJlbWFpbCI6ImNhbGxidWlzc2VAZ21haWwuY29tIiwgImlzcyI6IkFmVWYzX2t1VC1uTkxqRzF6WEVhQnJHTnFYbHdxbnlQdm1aZXlWYU91Qm81Sy1zSEpPd0JiaGJlNXljejRwNlNEUEZVNEs0cElraVc1ejZDIn0=

>> auth_assertion_header = auth1 + "." + auth2 + ".";