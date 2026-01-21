import { Task } from '../types';

export const detailedLearningTasks: Task[] = [
  // ==================== DAY 1 ====================
  {
    id: 'day1',
    title: 'Day 1: Python 環境 + 基礎語法',
    description: '從零開始學習 Python，完成環境設置並掌握基礎語法，完成 20 個編程練習',
    week: 1,
    day: 'Day 1',
    category: 'Python 基礎',
    icon: 'code',
    status: 'backlog',
    progress: 0,
    color: '#0A84FF',
    estimatedHours: 10,

    learningObjectives: [
      '✅ 完成 Python 開發環境設置（Python 3.9+, VS Code, pytest）',
      '✅ 理解變量、數據類型（int, float, str, bool）',
      '✅ 掌握列表（list）和字典（dict）的基本操作',
      '✅ 學會使用 if-else 條件判斷',
      '✅ 掌握 for 循環遍歷數據',
      '✅ 能夠定義和調用函數',
      '✅ 獨立完成 20 個 Python 練習題（至少 15 題）',
    ],

    coreConcepts: [
      {
        term: '變量 (Variable)',
        definition: '用於儲存數據的容器。Python 是動態類型語言，不需要聲明類型。',
        example: 'user_id = "123"  # 字串變量\nbalance = 1000  # 整數變量',
        importance: 'critical',
      },
      {
        term: '列表 (List)',
        definition: '有序的可變集合，用中括號 [] 表示，可以存儲任意類型的數據。',
        example: 'test_users = ["alice", "bob", "charlie"]\ntest_users.append("david")  # 添加元素',
        importance: 'critical',
      },
      {
        term: '字典 (Dictionary)',
        definition: '鍵值對集合，用大括號 {} 表示，適合存儲結構化數據（如 JSON）。',
        example: 'user = {"user_id": "123", "balance": 1000, "currency": "USDT"}',
        importance: 'critical',
      },
      {
        term: 'f-string 格式化',
        definition: 'Python 3.6+ 的字串格式化方法，使用 f"..." 語法嵌入變量。',
        example: 'name = "Alice"\nprint(f"Hello, {name}!")  # 輸出: Hello, Alice!',
        importance: 'important',
      },
      {
        term: '函數 (Function)',
        definition: '可重複使用的代碼塊，使用 def 定義，可以接受參數並返回值。',
        example: 'def validate_amount(amount):\n    return amount > 0 and amount <= 10000',
        importance: 'critical',
      },
    ],

    knowledgePoints: [
      {
        title: '1. Python 環境設置',
        content: `安裝 Python 3.9+ 並設置虛擬環境，這是專業開發的標準做法。

**為什麼需要虛擬環境？**
- 隔離不同專案的依賴
- 避免版本衝突
- 便於專案遷移和部署

**必裝套件：**
- pytest: 測試框架
- requests: HTTP 請求庫
- pytest-html: 測試報告生成`,
        codeExample: `# 檢查 Python 版本
python3 --version  # 應該 >= 3.9

# 創建虛擬環境
python3 -m venv venv

# 啟動虛擬環境 (macOS/Linux)
source venv/bin/activate

# 安裝套件
pip install pytest requests pytest-html

# 驗證安裝
pytest --version`,
        language: 'bash',
      },
      {
        title: '2. 變量與數據類型',
        content: `Python 是動態類型語言，變量不需要聲明類型。常用的基本類型包括：

**基本類型：**
- int: 整數（如 100, -50）
- float: 浮點數（如 100.5, 0.01）
- str: 字串（如 "USDT", 'BTC'）
- bool: 布林值（True, False）

**命名規範：**
- 使用 snake_case（小寫+底線）
- 變量名要有意義（user_id 而非 u）
- 避免使用 Python 關鍵字`,
        codeExample: `# API 測試常用變量
api_base_url = "https://api.binance.com"  # str
api_version = "v1"
timeout = 30  # int
is_authenticated = True  # bool
balance = 1000.50  # float

# 類型檢查
print(type(balance))  # <class 'float'>`,
        language: 'python',
      },
      {
        title: '3. 字串操作（API 測試必備）',
        content: `字串是 API 測試中最常操作的數據類型，用於構建 URL、解析響應等。

**常用操作：**
- 拼接：使用 + 或 f-string
- 分割：split() 方法
- 替換：replace() 方法
- 格式化：f-string 或 format()`,
        codeExample: `# 構建 API URL
base_url = "https://api.binance.com"
endpoint = "/v1/users"
user_id = "123"

# 方法 1: 使用 + 拼接
url = base_url + endpoint + "?id=" + user_id

# 方法 2: 使用 f-string（推薦）
url = f"{base_url}{endpoint}?id={user_id}"
print(url)  # https://api.binance.com/v1/users?id=123

# 常用字串方法
token = "Bearer abc123xyz"
print(token.startswith("Bearer"))  # True
print(token.split(" ")[1])  # abc123xyz`,
        language: 'python',
      },
      {
        title: '4. 列表操作（處理測試數據）',
        content: `列表用於存儲多個數據，在測試中常用於批量測試、數據驗證等場景。

**常用操作：**
- 添加元素：append(), extend()
- 刪除元素：remove(), pop()
- 訪問元素：索引 [0], [-1]
- 遍歷：for 循環
- 切片：[start:end]`,
        codeExample: `# 測試用戶列表
test_users = ["alice", "bob", "charlie"]

# 添加用戶
test_users.append("david")

# 訪問元素
first_user = test_users[0]  # alice
last_user = test_users[-1]  # david

# 遍歷列表
for user in test_users:
    print(f"Testing user: {user}")

# 列表長度
user_count = len(test_users)  # 4

# 檢查元素是否存在
if "alice" in test_users:
    print("Alice found!")

# 批量金額測試
test_amounts = [0.01, 100, 1000, 10000, 10001]
for amount in test_amounts:
    if 0.01 <= amount <= 10000:
        print(f"✅ {amount} 有效")
    else:
        print(f"❌ {amount} 無效")`,
        language: 'python',
      },
      {
        title: '5. 字典操作（解析 API 響應）',
        content: `字典是 key-value 結構，與 JSON 格式完全對應，是 API 測試的核心數據結構。

**常用操作：**
- 訪問值：dict["key"] 或 dict.get("key")
- 添加/修改：dict["key"] = value
- 刪除：del dict["key"]
- 遍歷：items(), keys(), values()`,
        codeExample: `# API 響應解析（最常用場景）
api_response = {
    "status_code": 200,
    "data": {
        "payment_id": "pay_abc123",
        "status": "success",
        "amount": 100,
        "currency": "USDT"
    }
}

# 提取數據
payment_id = api_response["data"]["payment_id"]
status = api_response["data"]["status"]
amount = api_response["data"]["amount"]

print(f"Payment {payment_id}: {status}, $" + "{amount}")

# 安全的訪問方式（避免 KeyError）
user_id = api_response.get("user_id", "unknown")

# 遍歷字典
for key, value in api_response["data"].items():
    print(f"{key}: {value}")

# 檢查 key 是否存在
if "payment_id" in api_response["data"]:
    print("Payment ID found!")`,
        language: 'python',
      },
      {
        title: '6. 條件判斷（if-elif-else）',
        content: `條件判斷用於根據不同情況執行不同代碼，在測試中用於驗證、分支處理等。

**比較運算符：**
- ==, !=：等於、不等於
- >, <, >=, <=：大於、小於及其等於
- in, not in：成員檢查
- and, or, not：邏輯運算`,
        codeExample: `# HTTP 狀態碼判斷
status_code = 404

if status_code == 200:
    print("✅ Success")
elif status_code == 404:
    print("⚠️ Not Found")
elif 500 <= status_code < 600:
    print("❌ Server Error")
else:
    print("❓ Unknown Status")

# 金額驗證
amount = 100

if amount <= 0:
    result = "金額必須大於0"
elif amount > 10000:
    result = "金額超過限制"
else:
    result = "金額有效"

print(result)

# 多條件判斷
user_role = "admin"
is_active = True

if user_role == "admin" and is_active:
    print("管理員且帳號啟用")
elif user_role == "admin" or is_active:
    print("管理員或帳號啟用")
else:
    print("普通用戶")`,
        language: 'python',
      },
      {
        title: '7. for 循環（批量測試）',
        content: `for 循環用於遍歷序列（列表、字典等），在測試中用於批量執行測試、數據驗證等。

**遍歷方式：**
- 遍歷列表：for item in list
- 遍歷字典：for key, value in dict.items()
- 範圍循環：for i in range(n)
- 帶索引：for i, item in enumerate(list)`,
        codeExample: `# 批量測試狀態碼
status_codes = [200, 201, 400, 404, 500]

for code in status_codes:
    if 200 <= code < 300:
        print(f"✅ {code}: Success")
    elif 400 <= code < 500:
        print(f"⚠️ {code}: Client Error")
    elif 500 <= code < 600:
        print(f"❌ {code}: Server Error")

# 批量金額驗證
test_amounts = [0.01, 100, 10000, 20000]

for amount in test_amounts:
    if 0.01 <= amount <= 10000:
        print(f"✅ {amount} USDT: 有效")
    else:
        print(f"❌ {amount} USDT: 無效")

# 帶索引的遍歷
users = ["alice", "bob", "charlie"]

for index, user in enumerate(users, start=1):
    print(f"測試 {index}: {user}")

# 遍歷字典
payment_data = {
    "amount": 100,
    "currency": "USDT",
    "status": "success"
}

for key, value in payment_data.items():
    print(f"{key} = {value}")`,
        language: 'python',
      },
      {
        title: '8. 函數定義（代碼重用）',
        content: `函數是組織代碼的基本單位，讓代碼可重複使用、易於維護。

**函數結構：**
- def 函數名(參數):
- return 返回值
- 參數可以有默認值
- 可以返回多個值（tuple）`,
        codeExample: `# 金額驗證函數
def validate_amount(amount):
    """
    驗證支付金額是否有效

    Args:
        amount: 支付金額

    Returns:
        (bool, str): (是否有效, 錯誤訊息)
    """
    if amount <= 0:
        return (False, "金額必須大於0")
    elif amount > 10000:
        return (False, "金額超過限制")
    else:
        return (True, "金額有效")

# 使用函數
is_valid, message = validate_amount(100)
print(f"驗證結果: {is_valid}, {message}")

# 帶默認值的函數
def build_api_url(endpoint, version="v1", base_url="https://api.binance.com"):
    """構建完整 API URL"""
    return f"{base_url}/{version}{endpoint}"

# 調用
url1 = build_api_url("/users")  # 使用默認值
url2 = build_api_url("/payments", version="v2")  # 覆蓋默認值
print(url1)  # https://api.binance.com/v1/users
print(url2)  # https://api.binance.com/v2/payments

# HTTP Headers 函數
def create_headers(token):
    """創建 API 請求 Headers"""
    return {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }

headers = create_headers("abc123")
print(headers)`,
        language: 'python',
      },
    ],

    codeExamples: [
      {
        title: '完整範例：API 金額驗證系統',
        code: `# 定義驗證函數
def validate_payment_amount(amount):
    """驗證支付金額"""
    if not isinstance(amount, (int, float)):
        return (False, "金額必須是數字")

    if amount <= 0:
        return (False, "金額必須大於0")

    if amount > 10000:
        return (False, "金額不能超過10000")

    # 檢查小數點位數
    if isinstance(amount, float):
        decimal_str = str(amount).split('.')[1] if '.' in str(amount) else ""
        if len(decimal_str) > 2:
            return (False, "小數點最多2位")

    return (True, "金額有效")

# 批量測試
test_amounts = [0.01, 100, 500.50, 10000, 10001, -10, "abc", 100.123]

passed = 0
failed = 0

print("===== 金額驗證測試 =====\\n")

for i, amount in enumerate(test_amounts, 1):
    is_valid, message = validate_payment_amount(amount)
    status = "✅ PASS" if is_valid else "❌ FAIL"
    print(f"Test {i}: {amount} -> {status}: {message}")

    if is_valid:
        passed += 1
    else:
        failed += 1

print(f"\\n===== 測試結果 =====")
print(f"總共: {len(test_amounts)} 個測試")
print(f"通過: {passed} 個")
print(f"失敗: {failed} 個")
print(f"通過率: {(passed/len(test_amounts)*100):.1f}%")`,
        language: 'python',
        explanation: '這個範例展示了如何：1) 定義可重用的驗證函數 2) 進行完整的輸入驗證 3) 批量執行測試 4) 統計測試結果。這是 QA 自動化測試的基本模式。',
      },
      {
        title: 'API 響應解析實戰',
        code: `# 模擬 API 響應
api_response = {
    "status_code": 200,
    "message": "Success",
    "data": {
        "user_id": "user_123",
        "balance": 1000.50,
        "currency": "USDT",
        "transactions": [
            {"tx_id": "tx_001", "amount": 100, "status": "completed"},
            {"tx_id": "tx_002", "amount": 50, "status": "pending"},
            {"tx_id": "tx_003", "amount": 200, "status": "completed"}
        ]
    }
}

# 解析基本資訊
status_code = api_response["status_code"]
user_id = api_response["data"]["user_id"]
balance = api_response["data"]["balance"]

print(f"用戶 {user_id} 餘額: {balance} USDT")

# 解析交易列表
transactions = api_response["data"]["transactions"]
print(f"\\n共有 {len(transactions)} 筆交易:")

completed_amount = 0
pending_amount = 0

for tx in transactions:
    tx_id = tx["tx_id"]
    amount = tx["amount"]
    status = tx["status"]

    print(f"- {tx_id}: {amount} USDT ({status})")

    if status == "completed":
        completed_amount += amount
    elif status == "pending":
        pending_amount += amount

print(f"\\n已完成交易總額: {completed_amount} USDT")
print(f"待處理交易總額: {pending_amount} USDT")
print(f"可用餘額: {balance} USDT")`,
        language: 'python',
        explanation: '展示如何解析嵌套的 JSON 數據結構，這是 API 測試中最常見的操作。學會提取、遍歷和聚合數據。',
      },
    ],

    exercises: [
      {
        title: '練習 1-5: 基本變量與運算',
        description: '創建變量、字串拼接、金額計算、狀態碼判斷、溫度轉換函數',
        difficulty: 'easy',
      },
      {
        title: '練習 6-10: 列表操作',
        description: '用戶列表管理、狀態碼遍歷、金額邊界值測試、幣種驗證、測試結果統計',
        difficulty: 'easy',
      },
      {
        title: '練習 11-15: 字典操作',
        description: '支付請求創建、API 響應解析、字典修改、Headers 構建、總金額計算',
        difficulty: 'medium',
      },
      {
        title: '練習 16-20: 函數與綜合應用',
        description: '金額驗證函數、URL 構建函數、支付狀態檢查、批量測試、完整 API 測試模擬',
        difficulty: 'medium',
      },
    ],

    interviewTips: [
      {
        question: 'Python 的列表和元組有什麼區別？',
        answer: '列表是可變的（mutable），可以修改、添加、刪除元素；元組是不可變的（immutable），創建後不能修改。在測試中，列表用於動態數據，元組用於固定配置。',
        priority: 'high',
      },
      {
        question: '如何在 Python 中處理 JSON 數據？',
        answer: 'Python 的字典（dict）與 JSON 完全對應。使用 json.loads() 將 JSON 字串轉為字典，json.dumps() 將字典轉為 JSON 字串。API 測試中常用 response.json() 直接解析。',
        priority: 'high',
      },
      {
        question: 'for 循環和 while 循環的使用場景？',
        answer: 'for 循環用於已知次數或遍歷序列（如測試數據列表）；while 循環用於未知次數或條件判斷（如等待 API 響應、重試機制）。測試中 for 循環更常用。',
        priority: 'medium',
      },
      {
        question: '如何設計一個測試用例的數據結構？',
        answer: '使用字典存儲測試數據，包含 input（輸入）、expected（預期）、actual（實際）、result（結果）等字段。可以用列表存儲多個測試用例，便於批量執行和報告生成。',
        priority: 'high',
      },
    ],

    resources: [
      {
        type: 'doc',
        title: 'Python 官方教程（中文）',
        url: 'https://docs.python.org/zh-tw/3/tutorial/',
        description: '官方入門教程，權威且全面',
      },
      {
        type: 'practice',
        title: 'Day 1 練習題（20 題）',
        description: '完成 20 個 Python 基礎練習，涵蓋變量、列表、字典、函數',
      },
      {
        type: 'article',
        title: 'Python f-string 格式化指南',
        description: '學習現代 Python 字串格式化方法',
      },
    ],

    prerequisites: [
      '無需任何編程基礎',
      '準備好學習的心態',
      '每天投入 10 小時學習時間',
    ],

    nextSteps: [
      'Day 2: 學習條件判斷進階、異常處理',
      'Day 3: 學習類別（Class）和物件導向',
      'Day 4: 開始 HTTP 和 API 測試',
    ],
  },

  // ==================== DAY 2 ====================
  {
    id: 'day2',
    title: 'Day 2: Python 進階語法',
    description: '掌握複雜條件判斷、異常處理機制，理解 HTTP 協議基礎，完成 15 個進階練習',
    week: 1,
    day: 'Day 2',
    category: 'Python 基礎',
    icon: 'psychology',
    status: 'backlog',
    progress: 0,
    color: '#0A84FF',
    estimatedHours: 10,

    learningObjectives: [
      '✅ 掌握複雜條件判斷（and, or, not, 嵌套 if）',
      '✅ 學會異常處理（try-except-finally-else）',
      '✅ 理解 HTTP 基礎概念（方法、狀態碼、Headers）',
      '✅ 掌握 while 循環和 break/continue',
      '✅ 學會使用內建函數（len, range, enumerate, zip）',
      '✅ 理解布林邏輯和短路求值',
      '✅ 獨立完成 15 個進階練習題（至少 12 題）',
    ],

    coreConcepts: [
      {
        term: '異常處理 (Exception Handling)',
        definition: '用 try-except 捕獲和處理程序執行中的錯誤，避免程序崩潰。',
        example: 'try:\n    response = api_call()\nexcept ConnectionError:\n    print("API 連接失敗")\nfinally:\n    cleanup()',
        importance: 'critical',
      },
      {
        term: 'HTTP 方法 (HTTP Methods)',
        definition: 'REST API 的四種主要操作：GET（讀取）、POST（創建）、PUT（更新）、DELETE（刪除）。',
        example: 'GET /api/users/123 - 獲取用戶\nPOST /api/payments - 創建支付\nPUT /api/users/123 - 更新用戶\nDELETE /api/users/123 - 刪除用戶',
        importance: 'critical',
      },
      {
        term: 'HTTP 狀態碼 (Status Codes)',
        definition: '服務器響應的狀態標識：2xx 成功、3xx 重定向、4xx 客戶端錯誤、5xx 服務器錯誤。',
        example: '200 OK - 成功\n201 Created - 創建成功\n400 Bad Request - 請求錯誤\n401 Unauthorized - 未授權\n404 Not Found - 資源不存在\n500 Internal Server Error - 服務器錯誤',
        importance: 'critical',
      },
      {
        term: '邏輯運算符 (Logical Operators)',
        definition: 'and（且）、or（或）、not（非），用於組合多個條件。支持短路求值。',
        example: 'if amount > 0 and amount <= 10000:\n    print("有效金額")\nif status == "pending" or status == "processing":\n    print("處理中")',
        importance: 'important',
      },
      {
        term: 'while 循環',
        definition: '基於條件的循環，條件為 True 時重複執行。常用於等待、重試機制。',
        example: 'retry_count = 0\nwhile retry_count < 3:\n    if api_call_success():\n        break\n    retry_count += 1',
        importance: 'important',
      },
    ],

    knowledgePoints: [
      {
        title: '1. 複雜條件判斷（API 測試場景）',
        content: `在實際測試中，常需要組合多個條件進行判斷。Python 提供 and, or, not 邏輯運算符。

**邏輯運算符：**
- and：所有條件都為 True 時返回 True
- or：任一條件為 True 時返回 True
- not：取反，True 變 False，False 變 True

**短路求值（重要概念）：**
- and：如果第一個條件為 False，不會檢查後面的條件
- or：如果第一個條件為 True，不會檢查後面的條件

**優先級：**
- not > and > or
- 使用括號 () 明確優先級`,
        codeExample: `# API 響應驗證（複雜條件）
status_code = 200
response_time = 1.5
data_valid = True

# 判斷 API 調用是否成功
if status_code == 200 and response_time < 2.0 and data_valid:
    print("✅ API 測試通過")
else:
    print("❌ API 測試失敗")

# 金額驗證（多條件）
amount = 100
currency = "USDT"
user_verified = True

# 檢查是否允許交易
if (amount >= 0.01 and amount <= 10000) and \\
   (currency in ["USDT", "BTC", "ETH"]) and \\
   user_verified:
    print("✅ 允許交易")
else:
    print("❌ 拒絕交易")

# 錯誤狀態判斷（or 運算）
status_code = 404

if status_code == 400 or status_code == 401 or status_code == 404:
    print("⚠️ 客戶端錯誤")
elif 500 <= status_code < 600:
    print("❌ 服務器錯誤")

# 更簡潔的寫法（使用 in）
if status_code in [400, 401, 404]:
    print("⚠️ 客戶端錯誤")

# not 運算符
is_authenticated = False

if not is_authenticated:
    print("❌ 用戶未登錄")

# 複雜嵌套條件
user_role = "admin"
is_active = True
has_permission = True

if user_role == "admin":
    if is_active and has_permission:
        print("✅ 允許操作")
    else:
        print("❌ 權限不足")
elif user_role == "user":
    if is_active:
        print("✅ 允許基本操作")
    else:
        print("❌ 帳號已停用")
else:
    print("❌ 未知角色")`,
        language: 'python',
      },
      {
        title: '2. 異常處理（try-except-finally）',
        content: `異常處理是 API 測試中的核心技能，用於處理網絡錯誤、超時、數據解析失敗等問題。

**為什麼需要異常處理？**
- API 調用可能失敗（網絡問題、服務器錯誤）
- 數據解析可能出錯（JSON 格式錯誤）
- 避免程序因錯誤而崩潰

**異常處理結構：**
- try: 嘗試執行的代碼
- except: 捕獲特定異常
- else: try 成功時執行（可選）
- finally: 無論成功失敗都執行（清理資源）

**常見異常類型：**
- ValueError: 值錯誤（數據轉換失敗）
- KeyError: 字典鍵不存在
- ZeroDivisionError: 除以零
- FileNotFoundError: 文件不存在
- ConnectionError: 網絡連接失敗（API 測試）`,
        codeExample: `# 基本異常處理
def validate_amount(amount_str):
    """驗證並轉換金額字串"""
    try:
        amount = float(amount_str)
        if amount <= 0:
            return (False, "金額必須大於0")
        return (True, amount)
    except ValueError:
        return (False, "金額格式錯誤")

# 測試
print(validate_amount("100"))      # (True, 100.0)
print(validate_amount("abc"))      # (False, "金額格式錯誤")
print(validate_amount("-10"))      # (False, "金額必須大於0")

# API 響應解析（捕獲多種異常）
import json

def parse_api_response(response_text):
    """解析 API JSON 響應"""
    try:
        data = json.loads(response_text)
        payment_id = data["payment_id"]
        amount = data["amount"]
        return {"success": True, "payment_id": payment_id, "amount": amount}
    except json.JSONDecodeError:
        return {"success": False, "error": "JSON 解析失敗"}
    except KeyError as e:
        return {"success": False, "error": f"缺少必要字段: {e}"}
    except Exception as e:
        return {"success": False, "error": f"未知錯誤: {e}"}

# try-except-else-finally 完整結構
def api_test_with_cleanup():
    """完整的 API 測試流程"""
    connection = None
    try:
        print("1. 建立連接...")
        connection = "API Connection"  # 模擬連接

        print("2. 發送請求...")
        response_code = 200  # 模擬響應

        if response_code != 200:
            raise ConnectionError(f"API 返回錯誤: {response_code}")

        print("3. 解析響應...")
        data = {"status": "success"}

    except ConnectionError as e:
        print(f"❌ 連接錯誤: {e}")
        return False
    except Exception as e:
        print(f"❌ 未知錯誤: {e}")
        return False
    else:
        # 只有 try 成功時才執行
        print("✅ 測試成功")
        return True
    finally:
        # 無論成功失敗都執行（清理資源）
        if connection:
            print("4. 關閉連接...")
            connection = None

# 調用
result = api_test_with_cleanup()

# 重試機制（結合異常處理）
def api_call_with_retry(max_retries=3):
    """帶重試的 API 調用"""
    for attempt in range(1, max_retries + 1):
        try:
            print(f"嘗試 {attempt}/{max_retries}...")
            # 模擬 API 調用
            if attempt < 3:  # 前兩次失敗
                raise ConnectionError("連接超時")
            print("✅ API 調用成功")
            return True
        except ConnectionError as e:
            print(f"❌ 失敗: {e}")
            if attempt == max_retries:
                print("❌ 達到最大重試次數")
                return False

api_call_with_retry()`,
        language: 'python',
      },
      {
        title: '3. HTTP 協議基礎（API 測試必備）',
        content: `HTTP 是 Web API 的基礎協議，理解 HTTP 對 API 測試至關重要。

**HTTP 請求結構：**
- 請求方法（Method）：GET, POST, PUT, DELETE
- URL：資源地址
- Headers：請求頭（如 Authorization, Content-Type）
- Body：請求體（POST/PUT 時包含數據）

**HTTP 響應結構：**
- 狀態碼（Status Code）：200, 404, 500...
- Headers：響應頭
- Body：響應數據（通常是 JSON）

**RESTful API 設計原則：**
- GET：獲取資源（不修改數據）
- POST：創建資源
- PUT：完整更新資源
- PATCH：部分更新資源
- DELETE：刪除資源`,
        codeExample: `# HTTP 方法對應的操作（RESTful API）

# GET - 獲取資源（不修改數據）
# URL: GET /api/users/123
# 用途: 獲取 ID 為 123 的用戶信息
# 響應: {"user_id": "123", "name": "Alice", "balance": 1000}

# POST - 創建資源
# URL: POST /api/payments
# Body: {"amount": 100, "currency": "USDT", "to_user": "bob"}
# 用途: 創建一筆支付
# 響應: {"payment_id": "pay_abc123", "status": "success"}

# PUT - 完整更新資源
# URL: PUT /api/users/123
# Body: {"name": "Alice Smith", "email": "alice@example.com"}
# 用途: 更新用戶的所有信息
# 響應: {"user_id": "123", "name": "Alice Smith", ...}

# DELETE - 刪除資源
# URL: DELETE /api/users/123
# 用途: 刪除用戶
# 響應: {"message": "User deleted successfully"}

# HTTP 狀態碼分類
status_codes = {
    # 2xx 成功
    200: "OK - 請求成功",
    201: "Created - 資源創建成功（POST 常用）",
    204: "No Content - 成功但無返回內容（DELETE 常用）",

    # 3xx 重定向
    301: "Moved Permanently - 永久重定向",
    302: "Found - 臨時重定向",

    # 4xx 客戶端錯誤
    400: "Bad Request - 請求格式錯誤",
    401: "Unauthorized - 未授權（未登錄）",
    403: "Forbidden - 禁止訪問（已登錄但無權限）",
    404: "Not Found - 資源不存在",
    422: "Unprocessable Entity - 請求格式正確但語義錯誤",
    429: "Too Many Requests - 請求過於頻繁",

    # 5xx 服務器錯誤
    500: "Internal Server Error - 服務器內部錯誤",
    502: "Bad Gateway - 網關錯誤",
    503: "Service Unavailable - 服務不可用",
    504: "Gateway Timeout - 網關超時",
}

# 狀態碼判斷函數
def check_response_status(status_code):
    """檢查 HTTP 響應狀態"""
    if 200 <= status_code < 300:
        return ("success", "✅ 請求成功")
    elif 400 <= status_code < 500:
        return ("client_error", f"⚠️ 客戶端錯誤: {status_code}")
    elif 500 <= status_code < 600:
        return ("server_error", f"❌ 服務器錯誤: {status_code}")
    else:
        return ("unknown", f"❓ 未知狀態: {status_code}")

# 測試
print(check_response_status(200))  # ('success', '✅ 請求成功')
print(check_response_status(404))  # ('client_error', '⚠️ 客戶端錯誤: 404')
print(check_response_status(500))  # ('server_error', '❌ 服務器錯誤: 500')

# HTTP Headers 示例
headers = {
    # 認證
    "Authorization": "Bearer abc123xyz",

    # 內容類型
    "Content-Type": "application/json",

    # 接受的響應格式
    "Accept": "application/json",

    # 用戶代理
    "User-Agent": "Binance-QA-Test/1.0",

    # 自定義 Header
    "X-Request-ID": "req_12345",
}

# 構建完整 API 請求信息
def build_api_request(method, endpoint, body=None):
    """構建 API 請求字典"""
    return {
        "method": method,
        "url": f"https://api.binance.com{endpoint}",
        "headers": {
            "Authorization": "Bearer token123",
            "Content-Type": "application/json",
        },
        "body": body,
    }

# 示例
get_request = build_api_request("GET", "/v1/users/123")
post_request = build_api_request("POST", "/v1/payments", {
    "amount": 100,
    "currency": "USDT"
})

print(get_request)
print(post_request)`,
        language: 'python',
      },
      {
        title: '4. while 循環與 break/continue',
        content: `while 循環用於未知次數的重複操作，常用於等待、重試、輪詢等場景。

**while vs for：**
- for：已知次數或遍歷序列
- while：未知次數，基於條件判斷

**控制語句：**
- break：立即退出循環
- continue：跳過本次循環，繼續下一次

**常見應用場景：**
- API 重試機制
- 等待條件滿足
- 用戶輸入驗證
- 輪詢狀態`,
        codeExample: `# 基本 while 循環
count = 0
while count < 5:
    print(f"計數: {count}")
    count += 1

# API 重試機制（最常用場景）
def api_call_with_retry():
    """模擬 API 重試"""
    max_retries = 3
    retry_count = 0

    while retry_count < max_retries:
        print(f"\\n嘗試 {retry_count + 1}/{max_retries}...")

        # 模擬 API 調用
        import random
        success = random.choice([True, False])

        if success:
            print("✅ API 調用成功")
            break  # 成功後退出循環
        else:
            print("❌ API 調用失敗")
            retry_count += 1

            if retry_count == max_retries:
                print("❌ 達到最大重試次數，放棄")
            else:
                print("等待 1 秒後重試...")

api_call_with_retry()

# 等待支付狀態變更（輪詢）
def wait_for_payment_completion(payment_id, timeout=30):
    """等待支付完成（模擬）"""
    elapsed_time = 0
    check_interval = 2  # 每 2 秒檢查一次

    print(f"等待支付 {payment_id} 完成...")

    while elapsed_time < timeout:
        # 模擬查詢支付狀態
        import random
        status = random.choice(["pending", "pending", "completed"])

        print(f"[{elapsed_time}s] 當前狀態: {status}")

        if status == "completed":
            print("✅ 支付完成")
            return True

        elapsed_time += check_interval

    print("❌ 等待超時")
    return False

wait_for_payment_completion("pay_123", timeout=10)

# break 和 continue 示例
print("\\n=== break 和 continue 示例 ===")

# 找到第一個有效金額就停止
test_amounts = [0, -10, 0.001, 100, 200, 500]

for amount in test_amounts:
    if amount <= 0:
        print(f"跳過無效金額: {amount}")
        continue  # 跳過本次循環

    if amount >= 100:
        print(f"✅ 找到有效金額: {amount}")
        break  # 找到後立即退出

    print(f"檢查金額: {amount}")

# while True 無限循環（需要 break 退出）
def process_api_requests():
    """處理 API 請求（簡化版）"""
    request_count = 0

    while True:  # 無限循環
        request_count += 1
        print(f"\\n處理請求 #{request_count}")

        if request_count >= 5:
            print("✅ 達到處理限制，停止")
            break  # 退出無限循環

        # 模擬處理
        print("處理中...")

process_api_requests()

# 用戶輸入驗證（實際場景）
def validate_user_input():
    """驗證用戶輸入（模擬）"""
    attempts = 0
    max_attempts = 3

    valid_inputs = ["100", "200", "500"]  # 模擬有效輸入

    while attempts < max_attempts:
        # 實際中這裡應該是 input()
        user_input = valid_inputs[attempts] if attempts < len(valid_inputs) else "invalid"
        print(f"\\n輸入: {user_input}")

        try:
            amount = float(user_input)
            if 0 < amount <= 10000:
                print(f"✅ 有效金額: {amount}")
                return amount
            else:
                print("❌ 金額超出範圍 (0-10000)")
        except ValueError:
            print("❌ 無效的數字格式")

        attempts += 1

    print("❌ 超過最大嘗試次數")
    return None

validate_user_input()`,
        language: 'python',
      },
      {
        title: '5. 內建函數（len, range, enumerate, zip）',
        content: `Python 提供了豐富的內建函數，大幅簡化代碼編寫。

**常用內建函數：**
- len()：獲取長度
- range()：生成數字序列
- enumerate()：遍歷時同時獲取索引和值
- zip()：並行遍歷多個序列
- sum()：求和
- max()/min()：最大/最小值
- all()/any()：全部/任一為真

**測試場景應用：**
- 統計測試結果
- 批量數據處理
- 並行比較數據`,
        codeExample: `# len() - 獲取長度
test_cases = ["test_1", "test_2", "test_3"]
print(f"總共 {len(test_cases)} 個測試用例")

api_response = {"user_id": "123", "balance": 1000, "currency": "USDT"}
print(f"響應包含 {len(api_response)} 個字段")

# range() - 生成數字序列
# range(stop): 0 到 stop-1
for i in range(5):
    print(f"測試 {i}")  # 0, 1, 2, 3, 4

# range(start, stop): start 到 stop-1
for i in range(1, 6):
    print(f"測試 {i}")  # 1, 2, 3, 4, 5

# range(start, stop, step): 帶步長
for i in range(0, 10, 2):
    print(f"測試 {i}")  # 0, 2, 4, 6, 8

# enumerate() - 同時獲取索引和值
test_users = ["alice", "bob", "charlie"]

for index, user in enumerate(test_users):
    print(f"測試 #{index}: {user}")
# 輸出:
# 測試 #0: alice
# 測試 #1: bob
# 測試 #2: charlie

# 從 1 開始編號
for index, user in enumerate(test_users, start=1):
    print(f"測試用例 {index}: {user}")

# zip() - 並行遍歷多個列表
test_amounts = [100, 200, 500]
expected_fees = [1, 2, 5]
actual_fees = [1, 2, 5]

print("\\n=== 費用驗證 ===")
for amount, expected, actual in zip(test_amounts, expected_fees, actual_fees):
    status = "✅ PASS" if expected == actual else "❌ FAIL"
    print(f"金額 {amount}: 預期手續費 {expected}, 實際 {actual} - {status}")

# sum() - 求和
amounts = [100, 200, 500, 1000]
total = sum(amounts)
print(f"\\n總金額: {total}")

# 計算平均值
average = sum(amounts) / len(amounts)
print(f"平均金額: {average}")

# max() / min() - 最大最小值
response_times = [0.5, 1.2, 0.8, 2.1, 0.3]
print(f"\\n最快響應: {min(response_times)}s")
print(f"最慢響應: {max(response_times)}s")

# all() / any() - 全部/任一為真
test_results = [True, True, True, True]
print(f"\\n所有測試通過: {all(test_results)}")  # True

test_results = [True, False, True, True]
print(f"所有測試通過: {all(test_results)}")  # False
print(f"至少一個測試通過: {any(test_results)}")  # True

# 實戰範例：批量驗證 API 響應
def validate_api_responses(responses):
    """批量驗證 API 響應"""
    print("\\n=== API 響應驗證 ===")

    valid_statuses = [200, 201]
    passed = 0
    failed = 0

    for index, response in enumerate(responses, start=1):
        status_code = response["status_code"]
        response_time = response["response_time"]

        # 驗證狀態碼和響應時間
        is_valid = status_code in valid_statuses and response_time < 2.0

        if is_valid:
            print(f"✅ 測試 {index}: 狀態碼 {status_code}, 響應時間 {response_time}s")
            passed += 1
        else:
            print(f"❌ 測試 {index}: 狀態碼 {status_code}, 響應時間 {response_time}s")
            failed += 1

    print(f"\\n總計: {len(responses)} 個測試")
    print(f"通過: {passed}, 失敗: {failed}")
    print(f"通過率: {(passed/len(responses)*100):.1f}%")

# 測試數據
responses = [
    {"status_code": 200, "response_time": 0.5},
    {"status_code": 200, "response_time": 1.2},
    {"status_code": 500, "response_time": 0.8},
    {"status_code": 200, "response_time": 3.0},
]

validate_api_responses(responses)`,
        language: 'python',
      },
      {
        title: '6. 列表推導式（List Comprehension）',
        content: `列表推導式是 Python 的強大特性，可以用一行代碼創建列表，代碼更簡潔優雅。

**基本語法：**
- [表達式 for 變量 in 序列]
- [表達式 for 變量 in 序列 if 條件]

**優勢：**
- 代碼更簡潔
- 執行效率更高
- 可讀性好（熟悉後）

**適用場景：**
- 數據轉換
- 數據過濾
- 批量測試數據生成`,
        codeExample: `# 傳統方式 vs 列表推導式

# 傳統方式：生成平方數列表
squares = []
for i in range(1, 6):
    squares.append(i ** 2)
print(f"傳統方式: {squares}")

# 列表推導式：一行搞定
squares = [i ** 2 for i in range(1, 6)]
print(f"推導式: {squares}")  # [1, 4, 9, 16, 25]

# 批量測試數據生成
# 生成測試用戶 ID
user_ids = [f"user_{i}" for i in range(1, 6)]
print(user_ids)  # ['user_1', 'user_2', ..., 'user_5']

# 生成測試金額
test_amounts = [i * 100 for i in range(1, 11)]
print(test_amounts)  # [100, 200, 300, ..., 1000]

# 帶條件的列表推導式
# 只生成偶數
even_numbers = [i for i in range(1, 11) if i % 2 == 0]
print(even_numbers)  # [2, 4, 6, 8, 10]

# 過濾有效金額
all_amounts = [0, 50, 100, 10001, 500, -10, 200]
valid_amounts = [amt for amt in all_amounts if 0 < amt <= 10000]
print(f"有效金額: {valid_amounts}")  # [50, 100, 500, 200]

# 數據轉換：提取 API 響應中的特定字段
api_responses = [
    {"user_id": "123", "balance": 1000},
    {"user_id": "456", "balance": 2000},
    {"user_id": "789", "balance": 1500},
]

# 提取所有 user_id
user_ids = [response["user_id"] for response in api_responses]
print(f"用戶 ID: {user_ids}")

# 提取所有 balance
balances = [response["balance"] for response in api_responses]
print(f"餘額列表: {balances}")
print(f"總餘額: {sum(balances)}")

# 組合條件：提取餘額大於 1500 的用戶 ID
rich_users = [
    response["user_id"]
    for response in api_responses
    if response["balance"] > 1500
]
print(f"高餘額用戶: {rich_users}")

# 實戰：批量構建 API URL
user_ids = ["123", "456", "789"]
base_url = "https://api.binance.com/v1/users"

urls = [f"{base_url}/{uid}" for uid in user_ids]
for url in urls:
    print(url)

# 實戰：批量驗證狀態碼
status_codes = [200, 201, 400, 404, 500, 200, 200]

# 統計成功的請求數量
success_count = len([code for code in status_codes if 200 <= code < 300])
print(f"\\n成功請求: {success_count}/{len(status_codes)}")

# 找出所有錯誤狀態碼
error_codes = [code for code in status_codes if code >= 400]
print(f"錯誤狀態碼: {error_codes}")

# 嵌套列表推導式（進階）
# 生成測試數據組合
currencies = ["USDT", "BTC"]
amounts = [100, 200]

# 生成所有組合
test_cases = [
    {"currency": curr, "amount": amt}
    for curr in currencies
    for amt in amounts
]

print("\\n測試用例:")
for case in test_cases:
    print(case)
# 輸出:
# {'currency': 'USDT', 'amount': 100}
# {'currency': 'USDT', 'amount': 200}
# {'currency': 'BTC', 'amount': 100}
# {'currency': 'BTC', 'amount': 200}`,
        language: 'python',
      },
    ],

    codeExamples: [
      {
        title: '完整範例：API 響應驗證系統（帶異常處理）',
        code: `import json

def validate_api_response(response_text, expected_status=200):
    """
    驗證 API 響應

    Args:
        response_text: JSON 響應字串
        expected_status: 預期狀態碼

    Returns:
        dict: 驗證結果
    """
    result = {
        "passed": False,
        "errors": [],
        "data": None
    }

    # 1. JSON 解析
    try:
        data = json.loads(response_text)
    except json.JSONDecodeError as e:
        result["errors"].append(f"JSON 解析失敗: {e}")
        return result

    # 2. 檢查必要字段
    required_fields = ["status_code", "message", "data"]

    for field in required_fields:
        if field not in data:
            result["errors"].append(f"缺少必要字段: {field}")

    if result["errors"]:
        return result

    # 3. 驗證狀態碼
    actual_status = data["status_code"]
    if actual_status != expected_status:
        result["errors"].append(
            f"狀態碼不匹配: 預期 {expected_status}, 實際 {actual_status}"
        )

    # 4. 驗證業務數據
    try:
        business_data = data["data"]

        # 檢查支付 ID 格式
        if "payment_id" in business_data:
            payment_id = business_data["payment_id"]
            if not payment_id.startswith("pay_"):
                result["errors"].append(f"支付 ID 格式錯誤: {payment_id}")

        # 檢查金額
        if "amount" in business_data:
            amount = business_data["amount"]
            if not isinstance(amount, (int, float)) or amount <= 0:
                result["errors"].append(f"金額無效: {amount}")

    except KeyError as e:
        result["errors"].append(f"業務數據錯誤: {e}")
    except Exception as e:
        result["errors"].append(f"未知錯誤: {e}")

    # 5. 判斷總體結果
    if not result["errors"]:
        result["passed"] = True
        result["data"] = data

    return result


# 測試案例
test_cases = [
    {
        "name": "正常響應",
        "response": '''{"status_code": 200, "message": "Success",
                       "data": {"payment_id": "pay_123", "amount": 100}}'''
    },
    {
        "name": "JSON 格式錯誤",
        "response": '''{"status_code": 200, "message": "Success"'''  # 缺少結尾
    },
    {
        "name": "缺少必要字段",
        "response": '''{"status_code": 200}'''
    },
    {
        "name": "狀態碼錯誤",
        "response": '''{"status_code": 500, "message": "Error", "data": {}}'''
    },
    {
        "name": "金額無效",
        "response": '''{"status_code": 200, "message": "Success",
                       "data": {"payment_id": "pay_123", "amount": -100}}'''
    },
]

# 批量測試
print("===== API 響應驗證測試 =====\\n")

passed = 0
failed = 0

for i, test_case in enumerate(test_cases, 1):
    print(f"測試 {i}: {test_case['name']}")
    result = validate_api_response(test_case["response"])

    if result["passed"]:
        print("  ✅ PASS")
        passed += 1
    else:
        print("  ❌ FAIL")
        for error in result["errors"]:
            print(f"     - {error}")
        failed += 1
    print()

print(f"===== 測試結果 =====")
print(f"總計: {len(test_cases)} 個測試")
print(f"通過: {passed} 個 ({passed/len(test_cases)*100:.1f}%)")
print(f"失敗: {failed} 個 ({failed/len(test_cases)*100:.1f}%)")`,
        language: 'python',
        explanation: '展示完整的 API 響應驗證流程，包含 JSON 解析、字段檢查、數據驗證、異常處理。這是真實 API 測試中的核心邏輯。',
      },
      {
        title: 'HTTP 狀態碼處理與重試機制',
        code: `import time
import random

class APITester:
    """API 測試類（簡化版）"""

    def __init__(self, base_url, max_retries=3, timeout=30):
        self.base_url = base_url
        self.max_retries = max_retries
        self.timeout = timeout

    def call_api(self, endpoint, method="GET"):
        """
        模擬 API 調用

        實際中應該使用 requests 庫
        這裡用隨機數模擬不同的響應狀態
        """
        # 模擬 API 調用（70% 成功率）
        status_code = random.choice([200, 200, 200, 500, 503, 404, 200])
        response_time = random.uniform(0.1, 2.0)

        return {
            "status_code": status_code,
            "response_time": response_time,
            "url": f"{self.base_url}{endpoint}"
        }

    def call_with_retry(self, endpoint, method="GET"):
        """帶重試機制的 API 調用"""
        for attempt in range(1, self.max_retries + 1):
            print(f"\\n[嘗試 {attempt}/{self.max_retries}] {method} {endpoint}")

            try:
                response = self.call_api(endpoint, method)
                status_code = response["status_code"]
                response_time = response["response_time"]

                print(f"  狀態碼: {status_code}")
                print(f"  響應時間: {response_time:.2f}s")

                # 根據狀態碼判斷
                if status_code == 200:
                    print("  ✅ 成功")
                    return response

                elif status_code == 404:
                    print("  ❌ 資源不存在 - 不重試")
                    return response

                elif status_code in [500, 502, 503, 504]:
                    print(f"  ⚠️ 服務器錯誤 ({status_code})")

                    if attempt < self.max_retries:
                        wait_time = 2 ** attempt  # 指數退避: 2, 4, 8 秒
                        print(f"  等待 {wait_time} 秒後重試...")
                        time.sleep(wait_time)
                        continue
                    else:
                        print("  ❌ 達到最大重試次數")
                        return response

                elif 400 <= status_code < 500:
                    print(f"  ❌ 客戶端錯誤 ({status_code}) - 不重試")
                    return response

                else:
                    print(f"  ❓ 未知狀態碼 ({status_code})")
                    return response

            except Exception as e:
                print(f"  ❌ 異常: {e}")

                if attempt < self.max_retries:
                    print(f"  等待 2 秒後重試...")
                    time.sleep(2)
                else:
                    print("  ❌ 達到最大重試次數")
                    raise

        return None

    def batch_test(self, endpoints):
        """批量測試多個 API"""
        print("\\n" + "="*50)
        print("開始批量測試")
        print("="*50)

        results = []

        for endpoint in endpoints:
            response = self.call_with_retry(endpoint)
            results.append({
                "endpoint": endpoint,
                "status_code": response["status_code"],
                "success": response["status_code"] == 200
            })
            time.sleep(0.5)  # 避免請求過快

        # 統計結果
        print("\\n" + "="*50)
        print("測試結果統計")
        print("="*50)

        total = len(results)
        passed = sum(1 for r in results if r["success"])
        failed = total - passed

        print(f"\\n總計: {total} 個 API")
        print(f"成功: {passed} 個 ({passed/total*100:.1f}%)")
        print(f"失敗: {failed} 個 ({failed/total*100:.1f}%)")

        print("\\n詳細結果:")
        for result in results:
            status = "✅" if result["success"] else "❌"
            print(f"  {status} {result['endpoint']} - {result['status_code']}")


# 使用範例
if __name__ == "__main__":
    # 創建測試器
    tester = APITester(
        base_url="https://api.binance.com",
        max_retries=3,
        timeout=30
    )

    # 批量測試
    endpoints = [
        "/v1/users/123",
        "/v1/payments",
        "/v1/balance",
        "/v1/transactions",
    ]

    tester.batch_test(endpoints)`,
        language: 'python',
        explanation: '展示 HTTP 狀態碼處理邏輯、指數退避重試機制、批量測試。這是生產環境 API 測試的標準模式。',
      },
    ],

    exercises: [
      {
        title: '練習 1-5: 複雜條件判斷',
        description: 'HTTP 狀態碼分類、金額範圍驗證、用戶權限檢查、多幣種驗證、API 響應時間判斷',
        difficulty: 'easy',
      },
      {
        title: '練習 6-10: 異常處理',
        description: 'JSON 解析錯誤處理、字典取值異常、類型轉換異常、除零錯誤、文件操作異常',
        difficulty: 'medium',
      },
      {
        title: '練習 11-15: while 循環與綜合應用',
        description: 'API 重試機制、狀態輪詢、用戶輸入驗證、列表推導式數據轉換、完整 API 測試腳本',
        difficulty: 'medium',
      },
    ],

    interviewTips: [
      {
        question: 'Python 中如何處理異常？try-except 的最佳實踐是什麼？',
        answer: '使用 try-except-finally 結構。最佳實踐：1) 捕獲特定異常而非 Exception 2) 在 finally 中清理資源 3) 不要使用異常控制流程 4) 記錄異常日誌。在 API 測試中，常用於處理網絡錯誤、JSON 解析失敗、超時等場景。',
        priority: 'high',
      },
      {
        question: 'HTTP 狀態碼 401 和 403 的區別是什麼？',
        answer: '401 Unauthorized 表示未認證（未登錄），需要提供身份驗證信息。403 Forbidden 表示已認證但無權限訪問該資源。測試時：401 應重新登錄獲取 token，403 需要檢查用戶權限配置。',
        priority: 'high',
      },
      {
        question: 'API 測試中如何設計重試機制？',
        answer: '設計要點：1) 只對可重試的錯誤重試（5xx，不包括 4xx）2) 使用指數退避策略（2^n 秒）3) 設置最大重試次數 4) 記錄每次重試日誌 5) 對於冪等性操作（GET）可以重試，非冪等性操作（POST）需謹慎。',
        priority: 'high',
      },
      {
        question: 'Python 的 and 和 or 如何實現短路求值？為什麼重要？',
        answer: 'and: 第一個為 False 時立即返回，不檢查後續條件。or: 第一個為 True 時立即返回。重要性：1) 提升性能 2) 避免錯誤（如 x != 0 and 10/x > 5）3) 利用短路特性可以寫出更簡潔的代碼（如 value or default）。',
        priority: 'medium',
      },
    ],

    resources: [],
    prerequisites: ['完成 Day 1 的所有練習', '理解 Python 基礎語法'],
    nextSteps: ['Day 3: 學習類別（Class）和物件導向', 'Day 4: 開始 HTTP 和 API 實戰測試'],
  },

  // ==================== DAY 3 ====================
  {
    id: 'day3',
    title: 'Day 3: Python 類別 + 支付系統核心概念',
    description: '學習 Python 物件導向編程，深入理解支付系統的冪等性、雙重支付防護、對帳機制等核心概念',
    week: 1,
    day: 'Day 3',
    category: 'Python 基礎',
    icon: 'account_balance',
    status: 'backlog',
    progress: 0,
    color: '#0A84FF',
    estimatedHours: 10,

    learningObjectives: [
      '✅ 理解 Python 類別（Class）與物件導向編程',
      '✅ 掌握支付系統的基本架構與核心流程',
      '✅ 深入理解冪等性（Idempotency）的概念與測試方法',
      '✅ 學會設計雙重支付防護的測試案例',
      '✅ 了解支付對帳機制與測試要點',
      '✅ 能夠設計 Binance Pay 的完整測試方案',
    ],

    coreConcepts: [
      {
        term: '冪等性 (Idempotency)',
        definition: '相同的請求執行多次，結果應該相同。支付系統必須保證重複請求不會導致重複扣款',
        example: '用戶連點支付按鈕 → 只扣款一次\n實現：X-Idempotency-Key: uuid',
        importance: 'critical',
      },
      {
        term: '雙重支付防護 (Double Spending)',
        definition: '防止同一筆資金被重複使用。使用分散式鎖、資料庫約束、冪等性設計來防護。',
        example: '餘額100，兩筆80同時發起 → 只有一筆成功',
        importance: 'critical',
      },
      {
        term: '支付對帳 (Reconciliation)',
        definition: 'T+1 比對內部交易記錄與外部支付通道記錄，確保金額、筆數、狀態一致。',
        example: '每日凌晨拉取雙方數據 → 比對差異 → 生成報告',
        importance: 'critical',
      },
      {
        term: '支付狀態機 (Payment State Machine)',
        definition: '定義支付的所有狀態及合法的狀態轉換，防止非法狀態變更。',
        example: 'created → pending → success → refunding → refunded',
        importance: 'important',
      },
      {
        term: 'Python 類別 (Class)',
        definition: '物件導向編程的基礎，用於封裝數據和方法。適合建立測試框架。',
        example: 'class APIClient:\n    def __init__(self, base_url):\n        self.base_url = base_url',
        importance: 'important',
      },
    ],

    knowledgePoints: [
      {
        title: '1. 支付系統架構',
        content: `支付系統通常包含以下組件：

**核心模塊：**
- 支付閘道 (Gateway): 統一入口，路由到不同通道
- 支付通道 (Channel): 對接銀行、第三方、區塊鏈
- 風控系統 (Risk): 反洗錢、限額檢查、異常檢測
- 對帳系統 (Reconciliation): T+1 對帳，差異處理

**核心流程：**
- 充值 (Deposit): 資金入帳
- 提現 (Withdrawal): 資金出帳
- 轉帳 (Transfer): 用戶間轉移
- 支付 (Payment): 商家收款
- 退款 (Refund): 資金返還`,
        codeExample: `# 支付系統架構示意
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   用戶端    │────>│  支付閘道   │────>│  支付通道   │
│  (App/Web)  │<────│  (Gateway)  │<────│  (Channel)  │
└─────────────┘     └─────────────┘     └─────────────┘
                           │                    │
                           ▼                    ▼
                    ┌─────────────┐     ┌─────────────┐
                    │  風控系統   │     │  銀行/區塊鏈 │
                    │   (Risk)    │     │  (Network)  │
                    └─────────────┘     └─────────────┘`,
        language: 'text',
      },
      {
        title: '2. Python 類別基礎',
        content: `類別是 Python 物件導向編程的核心，用於封裝數據和方法。

**基本語法：**
- __init__(): 建構函數，創建物件時執行
- self: 代表物件本身
- 方法: 定義物件的行為

**在測試中的應用：**
- 封裝 API 客戶端
- 管理測試數據
- 提高代碼複用性`,
        codeExample: `class PaymentAPIClient:
    """支付 API 測試客戶端"""

    def __init__(self, base_url, api_key):
        self.base_url = base_url
        self.session = requests.Session()
        self.session.headers.update({
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        })

    def create_payment(self, amount, currency="USDT"):
        """創建支付"""
        response = self.session.post(
            f"{self.base_url}/payments",
            json={"amount": amount, "currency": currency}
        )
        return response

    def get_payment(self, payment_id):
        """查詢支付狀態"""
        response = self.session.get(
            f"{self.base_url}/payments/{payment_id}"
        )
        return response.json()

# 使用示例
client = PaymentAPIClient("https://api.example.com", "your_api_key")
response = client.create_payment(amount=100)
print(response.status_code)`,
        language: 'python',
      },
      {
        title: '3. 冪等性測試實戰',
        content: `冪等性是支付系統最重要的特性之一。必須保證重複請求不會導致重複扣款。

**實現方式：**
1. 唯一請求ID（X-Idempotency-Key）
2. 資料庫唯一約束（UNIQUE INDEX）
3. 分散式鎖（Redis SETNX）
4. 狀態機檢查

**測試策略：**
- 發送完全相同的請求2次
- 驗證只處理一次
- 檢查返回的 payment_id 相同
- 驗證實際扣款金額正確`,
        codeExample: `def test_payment_idempotency():
    """測試支付冪等性 - 相同request_id只處理一次"""
    import uuid

    idempotency_key = str(uuid.uuid4())
    payload = {
        "amount": 100,
        "currency": "USDT",
        "recipient_id": "user_456"
    }
    headers = {
        "Authorization": f"Bearer {token}",
        "X-Idempotency-Key": idempotency_key
    }

    # 獲取初始餘額
    initial_balance = get_user_balance(user_id)

    # 第一次請求 - 應該成功
    response1 = requests.post(
        f"{BASE_URL}/payments",
        json=payload,
        headers=headers
    )
    assert response1.status_code == 201
    payment_id_1 = response1.json()["payment_id"]

    # 第二次相同請求 - 應該返回相同結果（冪等性）
    response2 = requests.post(
        f"{BASE_URL}/payments",
        json=payload,
        headers=headers
    )
    payment_id_2 = response2.json()["payment_id"]

    # 驗證：返回相同的payment_id
    assert payment_id_1 == payment_id_2

    # 驗證：只扣款一次
    final_balance = get_user_balance(user_id)
    assert final_balance == initial_balance - 100`,
        language: 'python',
      },
      {
        title: '4. 雙重支付併發測試',
        content: `雙重支付是支付系統必須防護的安全問題。通過併發測試驗證系統能否正確處理競爭條件。

**測試場景：**
- 快速連點支付按鈕
- 多線程同時發送請求
- 模擬網路重傳
- 餘額不足的併發請求

**驗證點：**
- 只有一筆支付成功（或全部失敗）
- 最終餘額正確
- 沒有產生重複訂單`,
        codeExample: `from concurrent.futures import ThreadPoolExecutor
import threading

def test_concurrent_double_spending():
    """測試併發雙重支付防護"""
    results = []
    lock = threading.Lock()

    def make_payment():
        response = requests.post(
            f"{BASE_URL}/payments",
            headers=headers,
            json={"amount": 80, "currency": "USDT"}
        )
        with lock:
            results.append({
                "status_code": response.status_code,
                "body": response.json()
            })

    # 設置初始餘額為100（只夠支付1筆80）
    set_user_balance(user_id, 100)

    # 併發發送10個80 USDT的支付請求
    with ThreadPoolExecutor(max_workers=10) as executor:
        futures = [executor.submit(make_payment) for _ in range(10)]

    # 統計結果
    success_count = sum(1 for r in results if r["status_code"] == 201)

    # 驗證：只有1筆成功（或0筆）
    assert success_count <= 1, f"雙重支付！成功了{success_count}筆"

    # 驗證最終餘額
    final_balance = get_user_balance(user_id)
    if success_count == 1:
        assert final_balance == 20  # 100 - 80
    else:
        assert final_balance == 100  # 全部失敗`,
        language: 'python',
      },
    ],

    codeExamples: [
      {
        title: '完整的支付測試腳本',
        code: `import requests
import uuid
from typing import Dict, Any

class PaymentAPIClient:
    def __init__(self, base_url: str, api_key: str):
        self.base_url = base_url
        self.session = requests.Session()
        self.session.headers.update({
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        })

    def create_payment(
        self,
        data: Dict[str, Any],
        idempotency_key: str = None
    ) -> requests.Response:
        headers = {}
        if idempotency_key:
            headers["X-Idempotency-Key"] = idempotency_key
        return self.session.post(
            f"{self.base_url}/payments",
            json=data,
            headers=headers
        )

    def get_payment(self, payment_id: str) -> Dict[str, Any]:
        response = self.session.get(
            f"{self.base_url}/payments/{payment_id}"
        )
        response.raise_for_status()
        return response.json()

class TestPaymentSystem:
    def setup_method(self):
        self.client = PaymentAPIClient(BASE_URL, API_KEY)
        self.test_user_id = "test_user_001"

    def test_normal_payment(self):
        """測試正常支付流程"""
        payload = {
            "user_id": self.test_user_id,
            "amount": 100,
            "currency": "USDT"
        }

        response = self.client.create_payment(payload)
        assert response.status_code == 201

        payment_id = response.json()["payment_id"]
        payment = self.client.get_payment(payment_id)

        assert payment["status"] == "success"
        assert payment["amount"] == 100

    def test_idempotency(self):
        """測試冪等性"""
        idempotency_key = str(uuid.uuid4())
        payload = {"amount": 100, "currency": "USDT"}

        response1 = self.client.create_payment(payload, idempotency_key)
        response2 = self.client.create_payment(payload, idempotency_key)

        assert response1.json()["payment_id"] == response2.json()["payment_id"]`,
        language: 'python',
        explanation: '展示如何使用類別封裝 API 客戶端，並編寫完整的支付測試流程，包含正常流程測試和冪等性測試。',
      },
    ],

    exercises: [
      {
        title: '設計 Binance Pay 轉帳測試方案',
        description: '為 Binance Pay 的 USDT 轉帳功能設計完整的測試方案，包含功能測試、安全測試、性能測試。至少涵蓋 20 個測試案例。',
        difficulty: 'medium',
      },
      {
        title: '實現支付狀態機驗證',
        description: '編寫 Python 函數驗證支付狀態轉換是否合法，並測試所有邊界情況。',
        difficulty: 'easy',
      },
      {
        title: '編寫併發雙重支付測試',
        description: '使用 ThreadPoolExecutor 模擬 10 個併發支付請求，驗證系統能否正確防護雙重支付。',
        difficulty: 'hard',
      },
    ],

    interviewTips: [
      {
        question: '什麼是支付冪等性？如何測試？',
        answer: '冪等性是指相同請求執行多次，結果相同。實現方式包括唯一請求ID、資料庫約束、分散式鎖。測試方法：發送相同請求2次，驗證 payment_id 相同且只扣款一次。',
        priority: 'high',
      },
      {
        question: '如何防止雙重支付？',
        answer: '使用多重防護：1) 冪等性設計（唯一ID）2) 資料庫樂觀鎖/悲觀鎖 3) 分散式鎖（Redis SETNX）4) 餘額預扣機制 5) 狀態機嚴格檢查。測試時使用併發請求驗證防護有效性。',
        priority: 'high',
      },
      {
        question: '支付系統如何處理超時？',
        answer: '1) 設置合理超時時間（如30s）2) 超時後查詢支付狀態 3) 實現重試機制（指數退避）4) 最終一致性保證 5) 提供補償接口。測試重點：模擬超時、驗證重試邏輯、檢查最終狀態正確性。',
        priority: 'high',
      },
      {
        question: '如何測試 Binance Pay 轉帳功能？',
        answer: '分層測試：1) 功能測試（正常流程、異常處理、邊界值）2) 冪等性測試（重複請求）3) 安全測試（認證、授權、加密）4) 性能測試（響應時間、併發、TPS）5) 整合測試（錢包餘額、通知、記錄）',
        priority: 'high',
      },
    ],

    resources: [
      {
        type: 'doc',
        title: 'Payment Gateway Testing Guide',
        url: 'https://www.globalapptesting.com/blog/payment-gateway-testing-interview-questions',
        description: '支付閘道測試完整指南',
      },
      {
        type: 'article',
        title: 'Idempotency in Payment Systems',
        description: '支付系統冪等性設計最佳實踐',
      },
    ],

    prerequisites: ['Day 1: Python 基礎', 'Day 2: Python 進階語法'],
    nextSteps: ['Day 4: HTTP + Requests', 'Day 5: pytest 基礎'],
  },

  // ==================== DAY 4 ====================
  {
    id: 'day4',
    title: 'Day 4: HTTP + Requests (Python API 測試)',
    description: '學習 HTTP 協議基礎、Python Requests 庫和 pytest 基礎，開始編寫 API 自動化測試',
    week: 1,
    day: 'Day 4',
    category: 'API Testing',
    icon: 'http',
    status: 'backlog',
    progress: 0,
    color: '#30D158',
    estimatedHours: 10,

    learningObjectives: [
      '✅ 掌握 HTTP 協議基礎（方法、狀態碼、Headers）',
      '✅ 熟練使用 Python Requests 庫發送 API 請求',
      '✅ 理解 Session 管理和認證機制',
      '✅ 學會使用 pytest 編寫測試用例',
      '✅ 掌握參數化測試（@pytest.mark.parametrize）',
      '✅ 能夠編寫完整的 API 測試腳本',
      '✅ 實現錯誤處理和重試機制',
    ],

    coreConcepts: [
      {
        term: 'HTTP 方法 (HTTP Methods)',
        definition: 'RESTful API 的核心操作：GET（讀取）、POST（創建）、PUT（更新）、DELETE（刪除）',
        example: 'GET /api/users/123  # 查詢用戶\nPOST /api/payments  # 創建支付\nPUT /api/users/123  # 更新用戶\nDELETE /api/users/123  # 刪除用戶',
        importance: 'critical',
      },
      {
        term: 'HTTP 狀態碼 (Status Codes)',
        definition: '服務器響應狀態：2xx 成功、3xx 重定向、4xx 客戶端錯誤、5xx 服務器錯誤',
        example: '200 OK - 成功\n201 Created - 創建成功\n400 Bad Request - 請求錯誤\n401 Unauthorized - 未授權\n404 Not Found - 資源不存在\n500 Internal Server Error - 服務器錯誤',
        importance: 'critical',
      },
      {
        term: 'Requests Session',
        definition: 'Session 對象可以保持連接、共享 cookies 和 headers，提升性能和代碼複用性',
        example: 'session = requests.Session()\nsession.headers["Authorization"] = f"Bearer {token}"\nresponse = session.get("/api/users")',
        importance: 'important',
      },
      {
        term: 'pytest 參數化測試',
        definition: '使用 @pytest.mark.parametrize 裝飾器，用一個測試函數執行多組測試數據',
        example: '@pytest.mark.parametrize("amount,expected", [(100, 201), (0, 400), (-10, 400)])\ndef test_payment(amount, expected):\n    assert response.status_code == expected',
        importance: 'important',
      },
    ],

    knowledgePoints: [
      {
        title: '1. HTTP 協議基礎',
        content: `HTTP 是 Web API 的基礎協議，理解 HTTP 對 API 測試至關重要。

**HTTP 請求結構：**
- 請求行：方法 + URL + 版本
- 請求頭（Headers）：元數據信息
- 請求體（Body）：POST/PUT 時包含數據

**HTTP 響應結構：**
- 狀態行：版本 + 狀態碼 + 狀態描述
- 響應頭（Headers）：元數據信息
- 響應體（Body）：返回的數據

**常見 HTTP Headers：**
- Content-Type: application/json（請求/響應格式）
- Authorization: Bearer token（認證）
- Accept: application/json（接受的響應格式）
- User-Agent: 客戶端標識`,
        codeExample: `# HTTP 方法對應的 CRUD 操作

# GET - 查詢資源（Read）
GET /api/v1/users/123
Headers:
  Authorization: Bearer abc123
  Accept: application/json

# POST - 創建資源（Create）
POST /api/v1/payments
Headers:
  Authorization: Bearer abc123
  Content-Type: application/json
Body:
  {
    "amount": 100,
    "currency": "USDT",
    "recipient_id": "user_456"
  }

# PUT - 完整更新資源（Update）
PUT /api/v1/users/123
Headers:
  Authorization: Bearer abc123
  Content-Type: application/json
Body:
  {
    "name": "Alice Smith",
    "email": "alice@example.com"
  }

# DELETE - 刪除資源（Delete）
DELETE /api/v1/users/123
Headers:
  Authorization: Bearer abc123

# 狀態碼分類
2xx 成功：
  200 OK - 請求成功
  201 Created - 資源創建成功（POST）
  204 No Content - 成功但無返回內容（DELETE）

4xx 客戶端錯誤：
  400 Bad Request - 請求格式錯誤
  401 Unauthorized - 未認證（未登錄）
  403 Forbidden - 已認證但無權限
  404 Not Found - 資源不存在
  422 Unprocessable Entity - 請求格式正確但語義錯誤

5xx 服務器錯誤：
  500 Internal Server Error - 服務器內部錯誤
  502 Bad Gateway - 網關錯誤
  503 Service Unavailable - 服務不可用
  504 Gateway Timeout - 網關超時`,
        language: 'text',
      },
      {
        title: '2. Python Requests 庫基礎',
        content: `Requests 是 Python 最流行的 HTTP 庫，語法簡潔、功能強大。

**基本用法：**
- requests.get() - GET 請求
- requests.post() - POST 請求
- requests.put() - PUT 請求
- requests.delete() - DELETE 請求

**響應對象屬性：**
- response.status_code - 狀態碼
- response.json() - JSON 解析
- response.text - 文本內容
- response.headers - 響應頭
- response.elapsed - 響應時間`,
        codeExample: `import requests
import json

# GET 請求
response = requests.get(
    url="https://api.example.com/users/123",
    headers={
        "Authorization": "Bearer token",
        "Accept": "application/json"
    },
    params={"include": "balance,profile"},
    timeout=30
)

print(f"狀態碼: {response.status_code}")
print(f"響應時間: {response.elapsed.total_seconds()}s")
print(f"響應數據: {response.json()}")

# POST 請求
response = requests.post(
    url="https://api.example.com/payments",
    headers={
        "Authorization": "Bearer token",
        "Content-Type": "application/json"
    },
    json={  # 自動序列化為 JSON
        "amount": 100.00,
        "currency": "USDT",
        "recipient_id": "user_456"
    },
    timeout=30
)

# 檢查響應
if response.status_code == 201:
    data = response.json()
    payment_id = data["payment_id"]
    print(f"✅ 支付創建成功: {payment_id}")
else:
    print(f"❌ 請求失敗: {response.status_code}")
    print(response.text)

# PUT 請求
response = requests.put(
    url="https://api.example.com/users/123",
    headers={"Authorization": "Bearer token"},
    json={"name": "Alice Smith", "email": "alice@example.com"}
)

# DELETE 請求
response = requests.delete(
    url="https://api.example.com/users/123",
    headers={"Authorization": "Bearer token"}
)

# 錯誤處理
try:
    response = requests.get(
        "https://api.example.com/users/123",
        timeout=5
    )
    response.raise_for_status()  # 4xx/5xx 拋出異常
    data = response.json()
except requests.Timeout:
    print("❌ 請求超時")
except requests.ConnectionError:
    print("❌ 連接錯誤")
except requests.HTTPError as e:
    print(f"❌ HTTP 錯誤: {e}")
except json.JSONDecodeError:
    print("❌ JSON 解析失敗")`,
        language: 'python',
      },
      {
        title: '3. Session 管理',
        content: `Session 對象可以在多個請求間保持連接、共享 cookies 和 headers，提升性能和代碼複用性。

**Session 優勢：**
- 連接複用（Connection Pooling）
- 自動管理 Cookies
- 共享 Headers 配置
- 性能更好（減少握手次數）

**適用場景：**
- 需要認證的 API 測試
- 批量 API 調用
- 需要保持會話狀態`,
        codeExample: `import requests

class APIClient:
    """API 測試客戶端（使用 Session）"""

    def __init__(self, base_url: str, timeout: int = 30):
        self.base_url = base_url
        self.timeout = timeout
        self.session = requests.Session()

        # 設置通用標頭
        self.session.headers.update({
            "Content-Type": "application/json",
            "Accept": "application/json",
            "User-Agent": "API-Test-Client/1.0"
        })

    def authenticate(self, username: str, password: str):
        """登入並設置 Token"""
        response = self.session.post(
            f"{self.base_url}/auth/login",
            json={"username": username, "password": password}
        )
        response.raise_for_status()

        token = response.json()["access_token"]
        self.session.headers["Authorization"] = f"Bearer {token}"
        return token

    def get(self, endpoint: str, **kwargs):
        """GET 請求"""
        url = f"{self.base_url}{endpoint}"
        return self.session.get(url, timeout=self.timeout, **kwargs)

    def post(self, endpoint: str, data: dict = None, **kwargs):
        """POST 請求"""
        url = f"{self.base_url}{endpoint}"
        return self.session.post(
            url,
            json=data,
            timeout=self.timeout,
            **kwargs
        )

    def put(self, endpoint: str, data: dict = None, **kwargs):
        """PUT 請求"""
        url = f"{self.base_url}{endpoint}"
        return self.session.put(
            url,
            json=data,
            timeout=self.timeout,
            **kwargs
        )

    def delete(self, endpoint: str, **kwargs):
        """DELETE 請求"""
        url = f"{self.base_url}{endpoint}"
        return self.session.delete(url, timeout=self.timeout, **kwargs)

    def close(self):
        """關閉 Session"""
        self.session.close()


# 使用示例
if __name__ == "__main__":
    # 創建客戶端
    client = APIClient("https://api.example.com")

    # 登入
    token = client.authenticate("test_user", "password123")
    print(f"✅ 登入成功，Token: {token[:20]}...")

    # 創建支付
    response = client.post("/api/v1/payments", {
        "amount": 100,
        "currency": "USDT",
        "recipient_id": "user_456"
    })

    if response.status_code == 201:
        payment_id = response.json()["payment_id"]
        print(f"✅ 支付創建成功: {payment_id}")

        # 查詢支付狀態
        response = client.get(f"/api/v1/payments/{payment_id}")
        status = response.json()["status"]
        print(f"支付狀態: {status}")

    # 關閉連接
    client.close()`,
        language: 'python',
      },
      {
        title: '4. pytest 基礎',
        content: `pytest 是 Python 最流行的測試框架，語法簡潔、功能強大。

**pytest 特點：**
- 簡潔的語法（使用 assert）
- 自動發現測試（test_*.py 或 *_test.py）
- 強大的 Fixture 機制
- 豐富的插件生態

**測試命名規範：**
- 測試文件：test_*.py
- 測試類：Test*
- 測試函數：test_*`,
        codeExample: `import pytest
import requests

class TestPaymentAPI:
    """支付 API 測試類"""

    BASE_URL = "https://api.example.com"

    @pytest.fixture(autouse=True)
    def setup(self):
        """每個測試前執行（Setup）"""
        self.client = requests.Session()
        self.client.headers["Authorization"] = "Bearer test_token"
        print("\\n[Setup] 初始化測試環境")

        yield  # 測試執行

        # Teardown
        self.client.close()
        print("[Teardown] 清理測試環境")

    def test_create_payment_success(self):
        """測試：成功創建支付"""
        payload = {
            "amount": 100.00,
            "currency": "USDT",
            "recipient_id": "user_456"
        }

        response = self.client.post(
            f"{self.BASE_URL}/api/v1/payments",
            json=payload
        )

        # 斷言狀態碼
        assert response.status_code == 201, f"預期 201，實際 {response.status_code}"

        # 斷言響應數據
        data = response.json()
        assert "payment_id" in data, "響應缺少 payment_id"
        assert data["status"] == "pending"
        assert data["amount"] == 100.00
        assert data["currency"] == "USDT"

        # 斷言響應時間
        assert response.elapsed.total_seconds() < 2.0, "響應時間過長"

    def test_create_payment_invalid_amount(self):
        """測試：無效金額（負數）"""
        payload = {
            "amount": -100,
            "currency": "USDT"
        }

        response = self.client.post(
            f"{self.BASE_URL}/api/v1/payments",
            json=payload
        )

        assert response.status_code == 400
        assert "amount" in response.json()["message"].lower()

    def test_create_payment_unauthorized(self):
        """測試：未授權請求"""
        # 移除認證標頭
        del self.client.headers["Authorization"]

        response = self.client.post(
            f"{self.BASE_URL}/api/v1/payments",
            json={"amount": 100, "currency": "USDT"}
        )

        assert response.status_code == 401


# 運行測試
# pytest test_payment.py -v
# pytest test_payment.py::TestPaymentAPI::test_create_payment_success -v`,
        language: 'python',
      },
      {
        title: '5. pytest 參數化測試',
        content: `參數化測試可以用一個測試函數執行多組測試數據，減少代碼重複，提高測試覆蓋率。

**使用場景：**
- 邊界值測試
- 等價類測試
- 不同輸入組合測試
- 多環境測試

**語法：**
@pytest.mark.parametrize("參數名", [值1, 值2, ...])`,
        codeExample: `import pytest
import requests

BASE_URL = "https://api.example.com"

# 單參數參數化
@pytest.mark.parametrize("amount", [0.01, 100, 1000, 10000])
def test_valid_amounts(amount):
    """測試有效金額"""
    response = requests.post(
        f"{BASE_URL}/api/v1/payments",
        headers={"Authorization": "Bearer token"},
        json={"amount": amount, "currency": "USDT"}
    )
    assert response.status_code == 201

# 多參數參數化
@pytest.mark.parametrize("amount,currency,expected_status", [
    (100, "USDT", 201),      # 正常
    (0.01, "USDT", 201),     # 最小金額
    (10000, "USDT", 201),    # 最大金額
    (0, "USDT", 400),        # 零
    (-50, "USDT", 400),      # 負數
    (10001, "USDT", 400),    # 超過上限
    (100, "", 400),          # 空幣種
    (100, "INVALID", 400),   # 無效幣種
])
def test_payment_validation(amount, currency, expected_status):
    """參數化測試支付驗證"""
    response = requests.post(
        f"{BASE_URL}/api/v1/payments",
        headers={"Authorization": "Bearer token"},
        json={"amount": amount, "currency": currency}
    )

    assert response.status_code == expected_status, \\
        f"金額 {amount} {currency}: 預期 {expected_status}，實際 {response.status_code}"

# 使用字典參數化
@pytest.mark.parametrize("test_case", [
    {"amount": 100, "currency": "USDT", "expected": 201, "desc": "正常支付"},
    {"amount": 0, "currency": "USDT", "expected": 400, "desc": "零金額"},
    {"amount": -10, "currency": "USDT", "expected": 400, "desc": "負金額"},
])
def test_payment_with_dict(test_case):
    """使用字典進行參數化測試"""
    response = requests.post(
        f"{BASE_URL}/api/v1/payments",
        headers={"Authorization": "Bearer token"},
        json={"amount": test_case["amount"], "currency": test_case["currency"]}
    )

    assert response.status_code == test_case["expected"], \\
        f"{test_case['desc']} 失敗"

# HTTP 狀態碼測試
@pytest.mark.parametrize("status_code,category", [
    (200, "成功"),
    (201, "成功"),
    (400, "客戶端錯誤"),
    (401, "客戶端錯誤"),
    (404, "客戶端錯誤"),
    (500, "服務器錯誤"),
    (502, "服務器錯誤"),
])
def test_status_code_categories(status_code, category):
    """測試狀態碼分類"""
    if 200 <= status_code < 300:
        assert category == "成功"
    elif 400 <= status_code < 500:
        assert category == "客戶端錯誤"
    elif 500 <= status_code < 600:
        assert category == "服務器錯誤"`,
        language: 'python',
      },
    ],

    codeExamples: [
      {
        title: '完整的 API 測試腳本',
        code: `import requests
import pytest
from typing import Dict, Any

class APIClient:
    """API 測試客戶端"""

    def __init__(self, base_url: str, timeout: int = 30):
        self.base_url = base_url
        self.timeout = timeout
        self.session = requests.Session()
        self.session.headers.update({
            "Content-Type": "application/json",
            "Accept": "application/json"
        })

    def set_auth_token(self, token: str):
        """設置認證 Token"""
        self.session.headers["Authorization"] = f"Bearer {token}"

    def post(self, endpoint: str, data: Dict[str, Any]) -> requests.Response:
        """POST 請求"""
        return self.session.post(
            f"{self.base_url}{endpoint}",
            json=data,
            timeout=self.timeout
        )

    def get(self, endpoint: str) -> requests.Response:
        """GET 請求"""
        return self.session.get(
            f"{self.base_url}{endpoint}",
            timeout=self.timeout
        )

    def close(self):
        """關閉 Session"""
        self.session.close()


class TestPaymentAPI:
    """支付 API 測試套件"""

    BASE_URL = "https://api.example.com"

    @pytest.fixture(scope="class")
    def api_client(self):
        """創建 API 客戶端（類級別 Fixture）"""
        client = APIClient(self.BASE_URL)

        # 登入獲取 Token
        response = client.post("/auth/login", {
            "username": "test_user",
            "password": "test_password"
        })
        token = response.json()["access_token"]
        client.set_auth_token(token)

        yield client

        client.close()

    def test_create_payment_success(self, api_client):
        """測試：成功創建支付"""
        payload = {
            "amount": 100.00,
            "currency": "USDT",
            "recipient_id": "user_456"
        }

        response = api_client.post("/api/v1/payments", payload)

        # 驗證響應
        assert response.status_code == 201
        data = response.json()

        assert "payment_id" in data
        assert data["payment_id"].startswith("pay_")
        assert data["status"] == "pending"
        assert data["amount"] == 100.00
        assert data["currency"] == "USDT"

        # 驗證響應時間
        assert response.elapsed.total_seconds() < 2.0

    @pytest.mark.parametrize("amount,expected_status,expected_error", [
        (0, 400, "金額必須大於0"),
        (-100, 400, "金額必須大於0"),
        (10001, 400, "金額超過限制"),
        (0.001, 400, "金額精度錯誤"),
    ])
    def test_create_payment_invalid_amount(
        self, api_client, amount, expected_status, expected_error
    ):
        """測試：無效金額"""
        payload = {
            "amount": amount,
            "currency": "USDT",
            "recipient_id": "user_456"
        }

        response = api_client.post("/api/v1/payments", payload)

        assert response.status_code == expected_status
        error_message = response.json()["message"]
        assert expected_error in error_message

    @pytest.mark.parametrize("currency", ["", "INVALID", "USD", "xxx"])
    def test_create_payment_invalid_currency(self, api_client, currency):
        """測試：無效幣種"""
        payload = {
            "amount": 100,
            "currency": currency,
            "recipient_id": "user_456"
        }

        response = api_client.post("/api/v1/payments", payload)

        assert response.status_code == 400
        assert "currency" in response.json()["message"].lower()

    def test_get_payment_success(self, api_client):
        """測試：查詢支付狀態"""
        # 先創建支付
        create_response = api_client.post("/api/v1/payments", {
            "amount": 100,
            "currency": "USDT",
            "recipient_id": "user_456"
        })
        payment_id = create_response.json()["payment_id"]

        # 查詢支付
        get_response = api_client.get(f"/api/v1/payments/{payment_id}")

        assert get_response.status_code == 200
        data = get_response.json()
        assert data["payment_id"] == payment_id
        assert data["status"] in ["pending", "success", "failed"]

    def test_get_payment_not_found(self, api_client):
        """測試：查詢不存在的支付"""
        response = api_client.get("/api/v1/payments/pay_nonexistent")

        assert response.status_code == 404
        assert "not found" in response.json()["message"].lower()`,
        language: 'python',
        explanation: '展示完整的 API 測試腳本，包含客戶端封裝、Fixture 使用、參數化測試、正常流程和異常處理測試。',
      },
    ],

    exercises: [
      {
        title: '練習 1: 編寫 CRUD API 測試',
        description: '為 User API（POST /users, GET /users/{id}, PUT /users/{id}, DELETE /users/{id}）編寫完整測試腳本',
        difficulty: 'medium',
      },
      {
        title: '練習 2: 實現 API 客戶端類',
        description: '封裝一個可重用的 APIClient 類，支持所有 HTTP 方法、Session 管理、認證',
        difficulty: 'medium',
      },
      {
        title: '練習 3: 參數化邊界值測試',
        description: '使用 @pytest.mark.parametrize 測試金額的各種邊界值（0, 0.01, 10000, 10001, -100）',
        difficulty: 'easy',
      },
    ],

    interviewTips: [
      {
        question: 'requests.get() 和 requests.Session() 的區別？',
        answer: 'Session 可以保持連接（Connection Pooling）、自動管理 Cookies、共享 Headers 配置，性能更好。適合需要多次請求同一服務器的場景。get() 每次都創建新連接，適合單次請求。',
        priority: 'high',
      },
      {
        question: '如何處理 API 請求超時？',
        answer: '1) 設置 timeout 參數 2) 使用 try-except 捕獲 requests.Timeout 3) 實現重試機制（指數退避）4) 記錄超時日誌。生產環境建議 timeout=30 秒，並最多重試 3 次。',
        priority: 'high',
      },
      {
        question: 'pytest 的 Fixture 有什麼作用？',
        answer: 'Fixture 用於測試前置條件設置和資源清理。優勢：1) 代碼複用 2) 依賴注入 3) 靈活的作用域（function/class/module/session）4) 自動清理（yield）。適合設置測試數據、API 客戶端、資料庫連接等。',
        priority: 'high',
      },
      {
        question: '如何驗證 JSON 響應的結構？',
        answer: '方法：1) 手動斷言關鍵字段存在 2) 使用 jsonschema 庫驗證結構 3) 檢查數據類型 4) 驗證必填字段和可選字段。生產環境建議使用 JSON Schema 定義接口規範，自動化驗證。',
        priority: 'medium',
      },
    ],

    resources: [
      {
        type: 'doc',
        title: 'Requests 官方文檔',
        url: 'https://requests.readthedocs.io/',
        description: 'Python Requests 庫完整文檔',
      },
      {
        type: 'doc',
        title: 'pytest 官方文檔',
        url: 'https://docs.pytest.org/',
        description: 'pytest 測試框架官方教程',
      },
      {
        type: 'article',
        title: 'API Testing Interview Questions',
        url: 'https://www.interviewbit.com/api-testing-interview-questions/',
        description: 'API 測試常見面試題',
      },
    ],

    prerequisites: ['Day 1-3: Python 基礎和進階語法'],
    nextSteps: ['Day 5: pytest 進階（Fixtures、conftest.py）', 'Day 6: 建立測試框架'],
  },

  // ==================== DAY 5 ====================
  {
    id: 'day5',
    title: 'Day 5: pytest 進階（Fixtures、conftest.py）',
    description: '深入掌握 pytest 核心特性：Fixtures 作用域、conftest.py 配置、Markers 標記管理及測試報告生成',
    week: 1,
    day: 'Day 5',
    category: 'Testing',
    icon: 'science',
    status: 'backlog',
    progress: 0,
    color: '#FF9F0A',
    estimatedHours: 8,

    learningObjectives: [
      '✅ 理解 Fixtures 的四種作用域（Function, Class, Module, Session）',
      '✅ 掌握 conftest.py 的用途與配置方法',
      '✅ 學會使用 Markers 管理測試（Smoke, Regression, Skip, Xfail）',
      '✅ 能夠設計清晰的測試專案結構',
      '✅ 掌握測試報告生成（pytest-html, Allure）',
      '✅ 理解 Fixture 的依賴注入與參數化機制',
    ],

    coreConcepts: [
      {
        term: 'Fixture Scopes',
        definition: '定義 Fixture 的生命週期：function（每個測試跑一次）、class（每類一次）、module（每檔一次）、session（全程一次）。',
        example: '@pytest.fixture(scope="session")\ndef db_conn(): ...',
        importance: 'critical',
      },
      {
        term: 'conftest.py',
        definition: 'pytest 的本地插件配置文件，用於定義目錄級共享的 Fixtures 和 Hooks，無需 import 即可使用。',
        example: '# tests/conftest.py\n@pytest.fixture\ndef shared_data(): ...',
        importance: 'critical',
      },
      {
        term: 'Markers',
        definition: '用於標記測試用例的元數據，可用於分類執行（如 -m smoke）、跳過測試或標記預期失敗。',
        example: '@pytest.mark.smoke\ndef test_login(): ...',
        importance: 'important',
      },
      {
        term: 'Dependency Injection',
        definition: 'pytest 通過函數參數名稱自動注入 Fixture，無需手動實例化，實現控制反轉。',
        example: 'def test_api(api_client):  # 自動注入 api_client fixture\n    api_client.get(...)',
        importance: 'important',
      },
    ],

    knowledgePoints: [
      {
        title: '1. Fixtures 進階與作用域',
        content: `Fixtures 是 pytest 的核心，用於處理測試的前置準備（Setup）和後置清理（Teardown）。

**四種作用域（Scope）：**
1. **function**（默認）：每個測試函數執行一次。適用於需要獨立環境的測試。
2. **class**：每個測試類執行一次。適用於類級別的資源共享。
3. **module**：每個測試文件執行一次。適用於文件內的資源共享。
4. **session**：整個測試會話執行一次。適用於昂貴資源（如資料庫連接、API Token）。

**Teardown 機制：**
使用 \`yield\` 關鍵字，\`yield\` 之後的代碼會在測試結束後執行，用於清理資源。`,
        codeExample: `import pytest

# Session 級：整個測試只執行一次（如資料庫連接）
@pytest.fixture(scope="session")
def db_connection():
    print("\\n[Session] 建立資料庫連接")
    connection = "DB_CONN"
    yield connection
    print("[Session] 關閉資料庫連接")

# Function 級：每個測試都執行（如清空數據表）
@pytest.fixture(scope="function")
def clear_tables(db_connection):
    print(f"\\n[Function] 清空表格 (使用 {db_connection})")
    yield
    print("[Function] 恢復表格")

def test_user_creation(clear_tables):
    print("執行測試：創建用戶")
    assert True

def test_order_creation(clear_tables):
    print("執行測試：創建訂單")
    assert True`,
        language: 'python',
      },
      {
        title: '2. conftest.py 與共享配置',
        content: `\`conftest.py\` 是 pytest 的 "本地插件"，用於在多個測試文件間共享 Fixtures 和配置。

**特點：**
- **無需 Import**：pytest 會自動發現並加載。
- **層級生效**：根目錄的 conftest 對所有測試生效，子目錄的只對該目錄生效。
- **Hooks**：可以實現 pytest 的鉤子函數（如修改命令行參數）。

**常見用途：**
- 定義全局 Fixtures（API 客戶端、環境配置）
- 自定義命令行選項
- 配置日誌規則`,
        codeExample: `# tests/conftest.py
import pytest
import os

# 自定義命令行選項
def pytest_addoption(parser):
    parser.addoption("--env", action="store", default="dev", help="測試環境")

# 全局環境配置 Fixture
@pytest.fixture(scope="session")
def app_config(request):
    env = request.config.getoption("--env")
    print(f"\\n[Config] 當前環境: {env}")
    return {
        "base_url": f"https://api.{env}.example.com",
        "timeout": 30
    }

# 共享 API 客戶端
@pytest.fixture(scope="session")
def api_client(app_config):
    from utils.client import APIClient
    client = APIClient(app_config["base_url"])
    yield client
    client.close()`,
        language: 'python',
      },
      {
        title: '3. Markers 標記管理',
        content: `Markers 用於對測試用例進行分類、過濾和控制執行行為。

**內建 Markers：**
- \`@pytest.mark.skip(reason=...)\`：無條件跳過
- \`@pytest.mark.skipif(condition, ...)\`：條件跳過
- \`@pytest.mark.xfail\`：預期失敗（如已知 Bug）
- \`@pytest.mark.parametrize\`：參數化

**自定義 Markers：**
需在 \`pytest.ini\` 中註冊，用於分類測試（如冒煙測試、回歸測試）。`,
        codeExample: `# pytest.ini
# [pytest]
# markers =
#     smoke: 冒煙測試
#     regression: 回歸測試
#     slow: 耗時測試

import pytest
import sys

@pytest.mark.smoke
def test_login():
    """冒煙測試：登入"""
    pass

@pytest.mark.regression
def test_payment_flow():
    """回歸測試：支付流程"""
    pass

@pytest.mark.slow
def test_data_sync():
    """耗時測試：數據同步"""
    pass

@pytest.mark.skipif(sys.platform == "win32", reason="不在 Windows 運行")
def test_linux_only():
    pass

# 執行命令：
# pytest -m smoke          # 只跑冒煙
# pytest -m "not slow"     # 不跑慢速
# pytest -m "smoke or regression"`,
        language: 'python',
      },
    ],

    codeExamples: [
      {
        title: '完整框架示例：conftest.py + Fixtures',
        code: `# tests/conftest.py
import pytest
import requests

class APIClient:
    def __init__(self, base_url, token=None):
        self.base_url = base_url
        self.token = token
        self.session = requests.Session()
        if token:
            self.session.headers["Authorization"] = f"Bearer {token}"

    def get(self, endpoint):
        return self.session.get(f"{self.base_url}{endpoint}")

    def close(self):
        self.session.close()

@pytest.fixture(scope="session")
def base_url():
    return "https://api.example.com"

@pytest.fixture(scope="session")
def admin_token(base_url):
    # 模擬登入獲取 Token
    return "admin_token_123"

@pytest.fixture(scope="function")
def api_client(base_url, admin_token):
    """每個測試函數獲得一個獨立的客戶端"""
    client = APIClient(base_url, admin_token)
    yield client
    client.close()

# tests/test_users.py
def test_get_users(api_client):
    """測試自動注入 api_client"""
    response = api_client.get("/users")
    assert response.status_code in [200, 404]  # 模擬斷言`,
        language: 'python',
        explanation: '展示了如何使用 conftest.py 定義共享 Fixtures，以及如何通過依賴注入將 Client 傳遞給測試函數。',
      },
    ],

    exercises: [
      {
        title: '練習 1: 實現 Session 級資料庫 Fixture',
        description: '編寫一個 scope="session" 的 fixture 模擬資料庫連接，並在 scope="function" 的 fixture 中使用它來清空數據。',
        difficulty: 'medium',
      },
      {
        title: '練習 2: 使用自定義 Markers 分類測試',
        description: '配置 pytest.ini，創建 smoke 和 integration 標記，並編寫測試用例進行分類執行。',
        difficulty: 'easy',
      },
      {
        title: '練習 3: 參數化 Fixture',
        description: '創建一個參數化的 fixture，讓一個測試函數自動在 "staging" 和 "prod" 兩個環境下執行。',
        difficulty: 'hard',
      },
    ],

    interviewTips: [
      {
        question: 'pytest fixture 的 yield 和 return 有什麼區別？',
        answer: 'return 僅返回值，無法執行清理操作。yield 可以返回值（yield value），並且 yield 之後的代碼會在測試結束後執行（Teardown），用於關閉連接、刪除數據等。',
        priority: 'high',
      },
      {
        question: 'conftest.py 的作用是什麼？',
        answer: 'conftest.py 用於定義目錄級別的共享 Fixtures 和 Hooks。pytest 會自動加載它，無需手動 import。它允許在不同測試文件間共享配置和資源。',
        priority: 'high',
      },
      {
        question: '解釋 pytest 的標記（Marker）機制。',
        answer: 'Marker 用於給測試打標籤。內建的如 @pytest.mark.skip 用於跳過，@pytest.mark.parametrize 用於參數化。自定義 Marker（如 @pytest.mark.smoke）用於分類測試，可通過 -m 參數過濾執行。',
        priority: 'medium',
      },
    ],

    resources: [
      {
        type: 'doc',
        title: 'pytest Fixtures 官方文檔',
        url: 'https://docs.pytest.org/en/6.2.x/fixture.html',
        description: '深入了解 Fixtures 的強大功能',
      },
      {
        type: 'article',
        title: 'Pytest Markers Guide',
        url: 'https://docs.pytest.org/en/stable/mark.html',
        description: '學習如何有效使用 Markers',
      },
    ],

    prerequisites: ['Day 4: HTTP + Requests', 'Day 5: pytest 基礎'],
    nextSteps: ['Day 6: 建立測試框架', 'Day 7: 整合與實戰'],
  },

  // ==================== DAY 6 ====================
  {
    id: 'day6',
    title: 'Day 6: Python 測試框架實戰 (架構設計)',
    description: '從零搭建生產級 API 自動化測試框架，包含目錄結構、配置管理與核心 Client 封裝',
    week: 1,
    day: 'Day 6',
    category: 'Project',
    icon: 'architecture',
    status: 'backlog',
    progress: 0,
    color: '#0A84FF',
    estimatedHours: 8,

    learningObjectives: [
      '✅ 搭建標準化的自動化測試專案結構',
      '✅ 實現環境配置管理（.env + config.py）',
      '✅ 封裝可重用的 HTTP Client（基於 Requests）',
      '✅ 設計通用的斷言與異常處理機制',
      '✅ 整合 Logging 日誌系統',
      '✅ 完成框架的基礎連通性測試',
    ],

    coreConcepts: [
      {
        term: '分層架構 (Layered Architecture)',
        definition: '將測試代碼分為配置層、工具層、業務邏輯層和測試層，降低耦合度，提高維護性。',
        example: 'Config -> Utils (Client) -> Test Cases',
        importance: 'critical',
      },
      {
        term: '單例模式 (Singleton)',
        definition: '確保配置類或資料庫連接在整個測試生命週期中只有一個實例，節省資源。',
        example: 'class Config:\n    _instance = None',
        importance: 'important',
      },
      {
        term: '封裝 (Encapsulation)',
        definition: '隱藏 HTTP 請求細節（如 URL 拼接、Headers 處理），對外提供簡潔的業務接口。',
        example: 'client.get_ticker("BTCUSDT")\n# 內部處理：get(f"/api/v3/ticker?symbol=BTCUSDT")',
        importance: 'critical',
      },
      {
        term: '環境隔離',
        definition: '通過配置文件切換不同測試環境（Dev/Staging/Prod），確保代碼無需修改即可在多環境運行。',
        example: 'BASE_URL = os.getenv("BASE_URL")',
        importance: 'important',
      },
    ],

    knowledgePoints: [
      {
        title: '1. 專案目錄結構設計',
        content: `良好的目錄結構是測試框架可維護性的基礎。

**推薦結構：**
- **config/**: 環境配置、測試數據
- **utils/**: 通用工具（API Client, DB Helper, Log）
- **tests/**: 測試用例（按模組分類）
- **reports/**: 測試報告（HTML, Allure）
- **logs/**: 運行日誌
- **conftest.py**: 全局 Fixtures
- **pytest.ini**: pytest 運行配置
- **requirements.txt**: 項目依賴`,
        codeExample: `binance-api-testing/
├── config/
│   ├── __init__.py
│   └── config.py           # 配置加載器
├── utils/
│   ├── __init__.py
│   ├── api_client.py       # 核心 Client
│   └── logger.py           # 日誌工具
├── tests/
│   ├── __init__.py
│   ├── conftest.py         # 共享 Fixtures
│   └── test_market_data.py # 測試用例
├── .env                    # 環境變量（敏感信息）
├── pytest.ini              # 運行配置
└── requirements.txt        # 依賴包`,
        language: 'text',
      },
      {
        title: '2. 配置管理實作',
        content: `使用 \`python-dotenv\` 加載 \`.env\` 文件，並通過 Config 類統一管理配置。

**優勢：**
- 敏感信息（API Key）不進代碼庫
- 輕鬆切換不同環境
- 集中管理配置項`,
        codeExample: `# .env
BINANCE_BASE_URL=https://testnet.binance.vision
API_KEY=your_api_key
TIMEOUT=30

# config/config.py
import os
from dotenv import load_dotenv

# 加載 .env
load_dotenv()

class Config:
    BASE_URL = os.getenv("BINANCE_BASE_URL", "https://api.binance.com")
    API_KEY = os.getenv("API_KEY")
    TIMEOUT = int(os.getenv("TIMEOUT", 30))

    @staticmethod
    def get_headers():
        return {
            "X-MBX-APIKEY": Config.API_KEY,
            "Content-Type": "application/json"
        }`,
        language: 'python',
      },
      {
        title: '3. API Client 封裝',
        content: `基於 \`requests.Session\` 封裝通用的 API Client，處理 URL 拼接、認證、異常捕獲和日誌記錄。

**功能點：**
- 自動拼接 Base URL
- 統一處理 Headers
- 統一的超時設置
- 請求/響應日誌記錄
- 異常統一轉拋`,
        codeExample: `# utils/api_client.py
import requests
from config.config import Config

class APIClient:
    def __init__(self):
        self.base_url = Config.BASE_URL
        self.session = requests.Session()
        self.session.headers.update(Config.get_headers())

    def _request(self, method, endpoint, **kwargs):
        url = f"{self.base_url}{endpoint}"
        try:
            response = self.session.request(
                method, url, timeout=Config.TIMEOUT, **kwargs
            )
            response.raise_for_status() # 檢查 4xx/5xx
            return response
        except requests.RequestException as e:
            print(f"API Request Failed: {e}")
            raise

    def get(self, endpoint, params=None):
        return self._request("GET", endpoint, params=params)

    def post(self, endpoint, data=None):
        return self._request("POST", endpoint, json=data)`,
        language: 'python',
      },
    ],

    codeExamples: [
      {
        title: '整合實戰：第一個測試用例',
        code: `# tests/conftest.py
import pytest
from utils.api_client import APIClient

@pytest.fixture(scope="session")
def client():
    return APIClient()

# tests/test_market_data.py
import pytest

class TestMarketData:
    def test_ping(self, client):
        """測試連通性"""
        response = client.get("/api/v3/ping")
        assert response.status_code == 200
        assert response.json() == {}

    def test_server_time(self, client):
        """測試服務器時間"""
        response = client.get("/api/v3/time")
        assert response.status_code == 200
        assert "serverTime" in response.json()`,
        language: 'python',
        explanation: '展示了如何將 Config、Client 和 Test 結合。測試用例非常簡潔，因為複雜的邏輯都被封裝在框架底層了。',
      },
    ],

    exercises: [
      {
        title: '任務 1: 初始化專案結構',
        description: '創建 binance-api-testing 文件夾，並按照推薦結構創建所有子目錄和空文件（__init__.py）。',
        difficulty: 'easy',
      },
      {
        title: '任務 2: 實現 Config 和 Client',
        description: '編寫 config.py 讀取環境變量，並實現 APIClient 類，支持 GET/POST 方法和日誌記錄。',
        difficulty: 'medium',
      },
      {
        title: '任務 3: 編寫 Ping 測試',
        description: '使用 pytest 編寫第一個測試用例 test_ping，驗證框架是否能正確發送請求並處理響應。',
        difficulty: 'medium',
      },
    ],

    interviewTips: [
      {
        question: '為什麼需要封裝 API Client？',
        answer: '1) 消除重複代碼（如 URL 拼接、Headers）。2) 統一管理配置（超時、認證）。3) 集中處理異常和日誌。4) 提高測試代碼的可讀性和維護性。',
        priority: 'high',
      },
      {
        question: '如何在測試中管理敏感數據（如 API Key）？',
        answer: '絕對不能硬編碼在代碼中。應使用環境變量（.env 文件）或加密的密鑰管理服務（如 AWS Secrets Manager）。在 CI/CD 中通過 Pipeline 變量注入。',
        priority: 'high',
      },
      {
        question: '你的自動化測試框架架構是怎樣的？',
        answer: '我採用分層架構：最底層是 Config 和 Utils（Client, DB），中間是 Page Object 或業務邏輯層（封裝 API 調用），最上層是測試用例（Test Case）。使用 pytest 作為執行器，Allure 生成報告。',
        priority: 'high',
      },
    ],

    resources: [
      {
        type: 'doc',
        title: 'Binance API 文件',
        url: 'https://binance-docs.github.io/apidocs/spot/en/',
        description: '官方 API 文檔，開發必備',
      },
      {
        type: 'practice',
        title: 'python-dotenv 文檔',
        url: 'https://pypi.org/project/python-dotenv/',
        description: '環境變量管理庫',
      },
    ],

    prerequisites: ['Day 5: pytest 進階'],
    nextSteps: ['Day 7: 測試案例實作與報告整合'],
  },

  // ==================== DAY 7 ====================
  {
    id: 'day7',
    title: 'Day 7: 測試案例實作與報告整合',
    description: '完成市場數據 API 測試，生成專業測試報告，並學習 CI/CD 持續集成基礎',
    week: 1,
    day: 'Day 7',
    category: 'Project',
    icon: 'assignment_turned_in',
    status: 'backlog',
    progress: 0,
    color: '#0A84FF',
    estimatedHours: 8,

    learningObjectives: [
      '✅ 編寫完整的市場數據 API 測試（Ticker, OrderBook）',
      '✅ 掌握參數化測試在實戰中的應用',
      '✅ 配置並生成 HTML 與 Allure 測試報告',
      '✅ 理解測試覆蓋率（Code Coverage）的概念',
      '✅ 了解 GitHub Actions 基礎與自動化測試流程',
      '✅ 完成 Week 1 專案總結與代碼提交',
    ],

    coreConcepts: [
      {
        term: 'Allure Report',
        definition: '一個靈活、輕量級的多語言測試報告工具，提供詳細的測試執行步驟、日誌和圖表，是業界標準。',
        example: 'pytest --alluredir=results && allure serve results',
        importance: 'critical',
      },
      {
        term: 'CI/CD (持續集成/部署)',
        definition: '自動化構建、測試和部署的流程。每次代碼提交自動運行測試，確保代碼質量。',
        example: 'GitHub Actions, Jenkins, GitLab CI',
        importance: 'important',
      },
      {
        term: '測試覆蓋率 (Coverage)',
        definition: '衡量測試代碼覆蓋了多少源代碼的指標。通常用百分比表示。',
        example: 'pytest --cov=src tests/',
        importance: 'important',
      },
      {
        term: '數據驅動測試 (DDT)',
        definition: '將測試數據與測試邏輯分離，通過外部數據源（CSV, JSON, YAML）驅動測試執行。',
        example: '@pytest.mark.parametrize("symbol", load_csv("symbols.csv"))',
        importance: 'important',
      },
    ],

    knowledgePoints: [
      {
        title: '1. 實戰：編寫市場數據測試',
        content: `基於 Day 6 封裝的 Client，編寫實際的業務測試案例。

**測試場景：**
- **Ping**: 服務連通性
- **Server Time**: 獲取服務器時間
- **Ticker Price**: 獲取最新價格（參數化測試多個交易對）
- **Order Book**: 獲取訂單簿（驗證數據結構和限制）

**斷言重點：**
- 狀態碼 (200)
- 響應時間 (< 1s)
- 數據結構完整性 (Schema Check)
- 業務邏輯 (如 askPrice >= bidPrice)`,
        codeExample: `# tests/test_market_data.py
import pytest

class TestMarketData:
    
    @pytest.mark.smoke
    def test_ticker_price(self, client):
        """測試 BTCUSDT 價格"""
        response = client.get("/api/v3/ticker/price", params={"symbol": "BTCUSDT"})
        assert response.status_code == 200
        data = response.json()
        
        assert data["symbol"] == "BTCUSDT"
        assert float(data["price"]) > 0

    @pytest.mark.parametrize("symbol", ["BTCUSDT", "ETHUSDT", "BNBUSDT"])
    def test_price_parameterized(self, client, symbol):
        """參數化測試多種幣對"""
        response = client.get("/api/v3/ticker/price", params={"symbol": symbol})
        assert response.status_code == 200
        assert response.json()["symbol"] == symbol

    def test_order_book(self, client):
        """測試訂單簿邏輯"""
        response = client.get("/api/v3/depth", params={"symbol": "BTCUSDT", "limit": 5})
        data = response.json()
        
        # 驗證 bids 和 asks 不為空
        assert len(data["bids"]) > 0
        assert len(data["asks"]) > 0
        
        # 驗證買一價 <= 賣一價 (基本市場邏輯)
        bid_price = float(data["bids"][0][0])
        ask_price = float(data["asks"][0][0])
        assert bid_price <= ask_price, "買價不應高於賣價"`,
        language: 'python',
      },
      {
        title: '2. 生成專業測試報告',
        content: `測試報告是 QA 工作的核心產出。我們使用 \`pytest-html\` 生成快速報告，使用 \`Allure\` 生成詳細報告。

**配置方法：**
在 \`pytest.ini\` 中添加配置：
\`\`\`ini
[pytest]
addopts = --html=reports/report.html --self-contained-html --alluredir=reports/allure-results
\`\`\`

**執行命令：**
1. 運行測試：\`pytest\`
2. 查看 HTML：打開 \`reports/report.html\`
3. 查看 Allure：\`allure serve reports/allure-results\``,
        codeExample: `# pytest.ini
[pytest]
testpaths = tests
python_files = test_*.py
python_classes = Test*
python_functions = test_*

addopts = 
    -v 
    --html=reports/report.html 
    --self-contained-html
    --alluredir=reports/allure-results

markers =
    smoke: 冒煙測試
    regression: 回歸測試`,
        language: 'ini',
      },
      {
        title: '3. CI/CD 基礎 (GitHub Actions)',
        content: `CI (持續集成) 確保每次代碼提交都自動運行測試。

**GitHub Actions 工作流：**
創建 \`.github/workflows/test.yml\`

**步驟：**
1. Check out 代碼
2. 安裝 Python 環境
3. 安裝依賴 (pip install)
4. 運行測試 (pytest)
5. 上傳測試報告`,
        codeExample: `# .github/workflows/test.yml
name: API Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up Python
      uses: actions/setup-python@v4
      with:
        python-version: '3.9'
        
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
        
    - name: Run tests
      run: |
        pytest tests/ --html=report.html
        
    - name: Upload Report
      uses: actions/upload-artifact@v3
      with:
        name: test-report
        path: report.html`,
        language: 'yaml',
      },
    ],

    codeExamples: [
      {
        title: '完整的 conftest.py 配置',
        code: `# tests/conftest.py
import pytest
from config.config import Config
from utils.api_client import APIClient

# Hook 函數：添加環境信息到報告
def pytest_configure(config):
    config._metadata = {
        "Project": "Binance API Test",
        "Environment": Config.ENV,
        "Base URL": Config.BASE_URL
    }

# Hook 函數：修改 HTML 報告標題
def pytest_html_report_title(report):
    report.title = "Binance API 自動化測試報告"

@pytest.fixture(scope="session")
def client():
    """全局 API Client"""
    client = APIClient()
    yield client
    client.close()

@pytest.fixture(autouse=True)
def log_test_name(request):
    """自動記錄當前測試名稱"""
    print(f"\\n>>> 開始測試: {request.node.name}")
    yield
    print(f"<<< 結束測試: {request.node.name}")`,
        language: 'python',
        explanation: '展示了如何利用 Hooks 自定義測試報告，以及使用 autouse fixture 自動記錄日誌。',
      },
    ],

    exercises: [
      {
        title: '任務 1: 完成 Market Data 測試套件',
        description: '編寫包含 Ticker, OrderBook, RecentTrades 的完整測試套件，至少覆蓋 5 個接口，包含參數化測試。',
        difficulty: 'medium',
      },
      {
        title: '任務 2: 生成 Allure 報告',
        description: '安裝 Allure 命令行工具，配置 pytest 生成數據，並成功在瀏覽器中預覽報告。',
        difficulty: 'medium',
      },
      {
        title: '任務 3: 配置 GitHub Actions',
        description: '在專案中創建 .github/workflows/main.yml，實現 Push 代碼時自動運行測試。',
        difficulty: 'hard',
      },
    ],

    interviewTips: [
      {
        question: 'CI/CD 在 QA 工作中的角色是什麼？',
        answer: 'CI/CD 讓測試自動化、常態化。QA 負責編寫自動化測試腳本並整合到 Pipeline 中，確保每次代碼變更都經過回歸測試（Regression Test），快速發現問題，減少發布風險。',
        priority: 'high',
      },
      {
        question: 'Allure 報告有哪些優勢？',
        answer: '1) 視覺化強：圖表展示成功率、耗時。2) 結構清晰：按 Suite/Package 分組。3) 詳細日誌：可集成 Steps, Attachments (截圖/響應體)。4) 歷史趨勢：可整合 Jenkins 展示趨勢圖。',
        priority: 'medium',
      },
      {
        question: '如何保證測試數據的獨立性？',
        answer: '1) 每個測試自行創建所需數據（Setup）。2) 測試後自動清理數據（Teardown）。3) 使用隨機化數據避免衝突。4) 避免測試間的數據依賴（如測試 B 依賴測試 A 的產出）。',
        priority: 'high',
      },
    ],

    resources: [
      {
        type: 'doc',
        title: 'Allure Pytest 文檔',
        url: 'https://allurereport.org/docs/pytest/',
        description: '學習生成漂亮的測試報告',
      },
      {
        type: 'doc',
        title: 'GitHub Actions 快速入門',
        url: 'https://docs.github.com/en/actions/quickstart',
        description: '學習 CI/CD 基礎',
      },
    ],

    prerequisites: ['Day 6: 測試框架架構'],
    nextSteps: ['Day 8: Pytest Mocking & Async Testing', 'Day 9: 支付系統測試實戰'],
  },

  // ==================== DAY 8 ====================
  {
    id: 'day8',
    title: 'Day 8: Pytest Mocking & Dependency Injection',
    description: '掌握單元測試中的模擬技術（Mocking），學會使用 pytest-mock 隔離外部依賴，提升測試穩定性與執行速度',
    week: 2,
    day: 'Day 8',
    category: 'Testing',
    icon: 'biotech',
    status: 'backlog',
    progress: 0,
    color: '#FF9F0A',
    estimatedHours: 8,

    learningObjectives: [
      '✅ 理解 Mock、Stub、Spy 的概念與區別',
      '✅ 掌握 pytest 內建的 monkeypatch 工具',
      '✅ 熟練使用 pytest-mock 插件進行物件模擬',
      '✅ 學會 Mock 外部 API 請求與響應',
      '✅ 掌握 Mock 資料庫連接與複雜物件',
      '✅ 能夠使用 Dependency Injection 模式優化測試代碼',
    ],

    coreConcepts: [
      {
        term: 'Mocking',
        definition: '使用模擬物件替代真實依賴（如資料庫、外部 API），以隔離測試目標並控制其行為。',
        example: 'mocker.patch("requests.get", return_value=mock_response)',
        importance: 'critical',
      },
      {
        term: 'Monkeypatch',
        definition: 'pytest 內建的 fixture，用於在運行時動態修改類或模組的屬性、字典或環境變量。',
        example: 'monkeypatch.setattr("os.getcwd", lambda: "/tmp")',
        importance: 'important',
      },
      {
        term: 'Side Effect',
        definition: 'Mock 物件在被調用時執行的額外動作，如拋出異常或根據輸入返回不同的值。',
        example: 'mocker.patch("api.call", side_effect=TimeoutError)',
        importance: 'important',
      },
      {
        term: 'Dependency Injection',
        definition: '將依賴物件通過參數傳遞給函數或類，而非在內部創建。pytest 的 fixture 系統就是完美的依賴注入實現。',
        example: 'def test_service(mock_db):  # mock_db 被注入',
        importance: 'critical',
      },
    ],

    knowledgePoints: [
      {
        title: '1. 為什麼需要 Mocking？',
        content: `在編寫單元測試時，我們希望測試邏輯是獨立且快速的。但現實專案中常有以下挑戰：

**Mocking 的核心優勢：**
- **速度**：避免真實的網絡請求或資料庫操作。
- **穩定性**：排除外部服務不穩定對測試的影響。
- **可控性**：輕鬆模擬各種邊緣情況（如 500 錯誤、網絡超時）。
- **成本**：避免在測試中消耗真實的付費 API 額度。

**何時不應 Mock：**
- 在整合測試（Integration Testing）中，應儘量使用真實依賴或容器化服務（如 Testcontainers）。`,
        codeExample: `# 未 Mock 的代碼（依賴真實網絡）
def get_btc_price():
    response = requests.get("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT")
    return float(response.json()["price"])

# 測試時如果幣安 API 掛了，測試就會失敗（非預期）`,
        language: 'python',
      },
      {
        title: '2. 使用 pytest-mock (mocker)',
        content: `\`pytest-mock\` 是 \`unittest.mock\` 的封裝，提供了更簡潔的 \`mocker\` fixture。

**常用方法：**
- \`mocker.patch()\`: 模擬一個函數或物件。
- \`mocker.patch.object()\`: 模擬一個類的方法。
- \`return_value\`: 指定返回的結果。
- \`side_effect\`: 指定副作用（拋出異常或動態返回）。`,
        codeExample: `import pytest

# 待測函數
def calculate_total_balance(api_client, user_id):
    """從 API 獲取餘額並計算"""
    response = api_client.get_balance(user_id)
    return response["balance"] * 1.05  # 假設有 5% 的手續費

# 測試代碼
def test_calculate_total_balance(mocker):
    # 1. 準備 Mock 對象
    mock_client = mocker.Mock()
    
    # 2. 設置 Mock 行為
    mock_client.get_balance.return_value = {"balance": 1000}
    
    # 3. 執行測試
    result = calculate_total_balance(mock_client, "user_123")
    
    # 4. 驗證
    assert result == 1050
    mock_client.get_balance.assert_called_once_with("user_123")`,
        language: 'python',
      },
      {
        title: '3. 模擬異常與超時',
        content: `測試代碼如何處理錯誤與正常流程同樣重要。使用 \`side_effect\` 可以輕鬆模擬 API 失敗場景。`,
        codeExample: `def test_api_timeout(mocker):
    # 模擬 requests.get 拋出超時異常
    mocker.patch("requests.get", side_effect=requests.exceptions.Timeout)
    
    with pytest.raises(requests.exceptions.Timeout):
        requests.get("https://api.binance.com")

def test_dynamic_return_values(mocker):
    # 每次調用返回不同值
    mock_func = mocker.patch("random.randint")
    mock_func.side_effect = [1, 2, 3]
    
    assert random.randint() == 1
    assert random.randint() == 2
    assert random.randint() == 3`,
        language: 'python',
      },
    ],

    codeExamples: [
      {
        title: '實戰：Mock 支付網關回調',
        code: `class PaymentService:
    def __init__(self, gateway_client):
        self.gateway = gateway_client

    def process_order(self, order_id, amount):
        # 1. 向支付網關發起請求
        response = self.gateway.charge(order_id, amount)
        
        # 2. 根據響應更新狀態
        if response.status == "success":
            return True
        return False

def test_payment_success(mocker):
    # 創建一個模擬的網關客戶端
    mock_gateway = mocker.Mock()
    
    # 模擬返回成功的 Response 物件
    mock_response = mocker.Mock()
    mock_response.status = "success"
    mock_gateway.charge.return_value = mock_response
    
    service = PaymentService(mock_gateway)
    result = service.process_order("ORD_001", 100)
    
    assert result is True
    mock_gateway.charge.assert_called_once_with("ORD_001", 100)`,
        language: 'python',
        explanation: '這個例子展示了如何 Mock 一個複雜物件的依賴鏈，並驗證方法是否被正確調用。',
      },
    ],

    exercises: [
      {
        title: '練習 1: Mock 外部幣價 API',
        description: '編寫一個函數獲取 ETH 價格，並使用 mocker.patch 模擬 requests.get 的返回，確保測試不需要聯網。',
        difficulty: 'medium',
      },
      {
        title: '練習 2: 模擬資料庫異常',
        description: '編寫一個用戶註冊函數，使用 mocker.patch 模擬資料庫 save() 方法拋出 IntegrityError，並驗證函數能正確處理。',
        difficulty: 'medium',
      },
    ],

    interviewTips: [
      {
        question: 'Mock 和 Stub 有什麼區別？',
        answer: 'Stub 僅提供預定義的數據（狀態模擬），主要用於讓測試能跑下去；Mock 不僅提供數據，還用於驗證行為（行為模擬），例如檢查某個方法是否被調用、調用了幾次、參數是什麼。',
        priority: 'high',
      },
      {
        question: '什麼是 Patching 的陷阱（The Patching Pitfall）？',
        answer: '最常見的問題是 "Patch 在哪裡導入，就在哪裡 Patch"。如果你在 a.py 中 import b，你應該 patch a.b 而非 b.b，否則 a.py 中已經導入的引用不會被替換。',
        priority: 'high',
      },
    ],

    resources: [
      {
        type: 'doc',
        title: 'pytest-mock 官方文件',
        url: 'https://github.com/pytest-dev/pytest-mock/',
        description: '學習進階 Mock 技巧',
      },
    ],

    prerequisites: ['Day 5: pytest 基礎'],
    nextSteps: ['Day 9: 非同步測試與協程處理'],
  },

  // ==================== DAY 9 ====================
  {
    id: 'day9',
    title: 'Day 9: 非同步測試與協程處理 (pytest-asyncio)',
    description: '學習如何測試 Python 的非同步代碼，掌握協程（Coroutines）的測試技巧與 pytest-asyncio 插件的使用',
    week: 2,
    day: 'Day 9',
    category: 'Testing',
    icon: 'speed',
    status: 'backlog',
    progress: 0,
    color: '#FF9F0A',
    estimatedHours: 8,

    learningObjectives: [
      '✅ 理解 Python asyncio 基礎（Event Loop, Coroutine, Await）',
      '✅ 掌握 pytest-asyncio 插件的安裝與配置',
      '✅ 學會編寫非同步測試函數（async def test_*）',
      '✅ 掌握非同步 Fixtures 的定義與作用域',
      '✅ 學會 Mock 非同步函數與類方法',
      '✅ 能夠測試非同步 HTTP 請求（使用 aiohttp）',
    ],

    coreConcepts: [
      {
        term: 'Coroutine (協程)',
        definition: '使用 async def 定義的函數，可以在執行中暫停並切換到其他任務，是 Python 非同步編程的核心。',
        example: 'async def fetch_data(): ...',
        importance: 'critical',
      },
      {
        term: 'Event Loop (事件迴圈)',
        definition: '非同步程序的調度中心，負責執行協程並處理 I/O 事件。在測試中，pytest-asyncio 會自動管理 Event Loop。',
        example: 'asyncio.get_event_loop()',
        importance: 'important',
      },
      {
        term: 'pytest-asyncio',
        definition: 'pytest 的官方非同步測試插件，支持直接運行 async 測試並提供非同步 Fixture 支持。',
        example: '@pytest.mark.asyncio\nasync def test_api(): ...',
        importance: 'critical',
      },
      {
        term: 'Async Mocking',
        definition: '模擬非同步函數的行為。與普通 Mock 不同，Async Mock 必須返回一個可等待物件（Awaitable）。',
        example: 'mocker.patch("service.call", new_callable=mocker.AsyncMock)',
        importance: 'important',
      },
    ],

    knowledgePoints: [
      {
        title: '1. 為什麼需要非同步測試？',
        content: `現代支付系統和交易所（如幣安）需要處理極高的併發請求。傳統的同步代碼會因為等待網路 I/O 而阻塞，而非同步代碼（async/await）能大幅提升系統吞吐量。

**非同步測試的挑戰：**
- 普通的 \`pytest\` 無法直接運行 \`async def\` 函數。
- 必須在一個運行的 Event Loop 中執行測試。
- 需要處理非同步資源的初始化與清理。`,
        codeExample: `import asyncio

async def async_add(a, b):
    await asyncio.sleep(0.1) # 模擬網路延遲
    return a + b

# 如果直接用普通測試會報錯：
# RuntimeWarning: coroutine 'async_add' was never awaited`,
        language: 'python',
      },
      {
        title: '2. 使用 pytest-asyncio',
        content: `這是測試非同步代碼的標準工具。

**安裝：** \`pip install pytest-asyncio\`

**使用方法：**
- 在測試函數上添加 \`@pytest.mark.asyncio\`。
- 在 \`pytest.ini\` 中設置 \`asyncio_mode = auto\` 以自動識別所有 async 測試。`,
        codeExample: `import pytest
import asyncio

@pytest.mark.asyncio
async def test_async_process():
    result = await async_add(10, 20)
    assert result == 30

# 非同步 Fixture 示例
@pytest.fixture
async def async_client():
    # Setup: 創建非同步連接
    client = AsyncClient()
    await client.connect()
    
    yield client
    
    # Teardown: 關閉連接
    await client.close()`,
        language: 'python',
      },
      {
        title: '3. Mocking 非同步函數',
        content: `測試非同步代碼時，我們常需要 Mock 掉非同步的 API 調用。使用 \`mocker.AsyncMock\` (或 \`unittest.mock.AsyncMock\`)。`,
        codeExample: `async def get_user_data(user_id):
    # 模擬從遠端獲取數據
    await asyncio.sleep(1)
    return {"id": user_id, "name": "Alice"}

@pytest.mark.asyncio
async def test_get_user_data(mocker):
    # 使用 AsyncMock 模擬非同步函數
    mock_fetch = mocker.patch("app.get_user_data", new_callable=mocker.AsyncMock)
    mock_fetch.return_value = {"id": "123", "name": "Mocked"}
    
    result = await get_user_data("123")
    assert result["name"] == "Mocked"
    mock_fetch.assert_awaited_once()`,
        language: 'python',
      },
    ],

    codeExamples: [
      {
        title: '實戰：測試 aiohttp 客戶端',
        code: `import aiohttp
import pytest

class BinanceAsyncClient:
    async def get_ticker(self, symbol):
        async with aiohttp.ClientSession() as session:
            url = f"https://api.binance.com/api/v3/ticker/price?symbol={symbol}"
            async with session.get(url) as response:
                return await response.json()

@pytest.mark.asyncio
async def test_binance_async_ticker(mocker):
    client = BinanceAsyncClient()
    
    # Mock aiohttp 的響應
    mock_json = {"symbol": "BTCUSDT", "price": "60000"}
    
    # 這裡通常使用 aioresponses 庫或手動 Mock
    # 簡化版 Mock 示例
    mocker.patch.object(client, "get_ticker", return_value=mock_json)
    
    data = await client.get_ticker("BTCUSDT")
    assert data["symbol"] == "BTCUSDT"
    assert data["price"] == "60000"`,
        language: 'python',
        explanation: '展示瞭如何測試基於 aiohttp 的非同步 HTTP 客戶端，這是非同步 API 測試最常見的場景。',
      },
    ],

    exercises: [
      {
        title: '練習 1: 編寫第一個非同步測試',
        description: '實現一個非同步函數模擬餘額查詢，並使用 pytest-asyncio 編寫測試驗證其行為。',
        difficulty: 'easy',
      },
      {
        title: '練習 2: 非同步 Fixture 實戰',
        description: '創建一個非同步的資料庫連接 Fixture，並在測試中使用 await 進行數據查詢。',
        difficulty: 'medium',
      },
    ],

    interviewTips: [
      {
        question: 'asyncio.gather() 和 await 有什麼區別？',
        answer: 'await 是順序執行，一個任務完成才開始下一個；asyncio.gather() 是併發執行，可以同時啟動多個任務並等待它們全部完成。在測試中，gather 常用於模擬併發請求。',
        priority: 'high',
      },
      {
        question: '如何測試一個無限循環的非同步任務（如 WebSocket 監聽）？',
        answer: '通常使用 asyncio.wait_for() 設置超時時間，或者在測試中 Mock 掉循環的條件，讓它在執行幾次後自動退出。',
        priority: 'medium',
      },
    ],

    resources: [
      {
        type: 'doc',
        title: 'pytest-asyncio 文件',
        url: 'https://pytest-asyncio.readthedocs.io/',
        description: '非同步測試官方指南',
      },
    ],

    prerequisites: ['Day 2: Python 進階', 'Day 8: Mocking 基礎'],
    nextSteps: ['Day 10: 進階數據驅動測試 (YAML/JSON)'],
  },

  // ==================== DAY 10 ====================
  {
    id: 'day10',
    title: 'Day 10: 進階數據驅動測試 (Data-Driven Testing)',
    description: '學習如何將測試數據與代碼分離，實現從 YAML、JSON 或 CSV 文件加載大批量測試數據並自動執行',
    week: 2,
    day: 'Day 10',
    category: 'Testing',
    icon: 'table_view',
    status: 'backlog',
    progress: 0,
    color: '#FF9F0A',
    estimatedHours: 8,

    learningObjectives: [
      '✅ 理解數據驅動測試 (DDT) 的核心價值與場景',
      '✅ 掌握 Python 讀取 JSON、YAML、CSV 文件的技巧',
      '✅ 學會將外部數據注入 pytest 參數化裝飾器',
      '✅ 掌握動態測試 ID 的生成方法（ids 參數）',
      '✅ 能夠設計支持多環境切換的測試數據中心',
      '✅ 理解 Excel 在自動化測試中的應用與侷限',
    ],

    coreConcepts: [
      {
        term: 'DDT (Data-Driven Testing)',
        definition: '將測試邏輯（代碼）與測試數據（文件）分離。通過更換數據文件，即可在不改動代碼的情況下擴展測試覆蓋範圍。',
        example: 'test_cases = load_yaml("cases.yaml")',
        importance: 'critical',
      },
      {
        term: 'Separation of Concerns',
        definition: '關注點分離。代碼負責 "怎麼測"，文件負責 "測什麼"。這是構建大型自動化框架的基礎。',
        example: '代碼保持不變，只需在 CSV 增加一行即可增加一個測試用例。',
        importance: 'important',
      },
      {
        term: 'YAML',
        definition: '一種人類可讀的數據序列化語言，比 JSON 更簡潔，且支持註釋，是自動化測試首選的配置文件格式。',
        example: 'PyYAML 庫：yaml.safe_load(file)',
        importance: 'critical',
      },
    ],

    knowledgePoints: [
      {
        title: '1. 為什麼要分離數據？',
        content: `在小型專案中，我們可以使用 \`@pytest.mark.parametrize\` 硬編碼測試數據。但在大型專案中，這樣做會導致：
- 測試代碼變得臃腫且難以維護。
- 非技術人員（如產品經理、手工 QA）難以協助維護測試案例。
- 數據複用性差。

**數據驅動的優勢：**
- **易於擴展**：增加測試場景只需在 YAML 增加幾行。
- **配置與代碼分離**：可以為不同環境（Staging/Prod）準備不同的數據文件。
- **更好的可讀性**：YAML 文件可以像文檔一樣清晰。`,
        codeExample: `# test_data.yaml
- name: "正常支付"
  amount: 100
  expected: 201
- name: "餘額不足"
  amount: 999999
  expected: 400`,
        language: 'yaml',
      },
      {
        title: '2. 讀取與注入外部數據',
        content: `Python 的 \`json\` 和 \`PyYAML\` 庫可以輕鬆將文件轉為列表或字典。`,
        codeExample: `import pytest
import yaml
import json

def load_test_data(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        if file_path.endswith(".yaml") or file_path.endswith(".yml"):
            return yaml.safe_load(f)
        return json.load(f)

# 使用方式
@pytest.mark.parametrize("case", load_test_data("tests/data/payment_cases.yaml"))
def test_payment(case):
    print(f"執行案例: {case['name']}")
    # 執行測試邏輯...
    assert response.status_code == case['expected']`,
        language: 'python',
      },
      {
        title: '3. 優化測試顯示 (IDS)',
        content: `當測試數據很多時，pytest 的輸出會變得很混亂。使用 \`ids\` 參數可以讓每個測試用例在報告中顯示具有業務意義的名稱。`,
        codeExample: `test_cases = [
    {"id": "TC001", "name": "Success Case", "amount": 100},
    {"id": "TC002", "name": "Zero Amount", "amount": 0},
]

@pytest.mark.parametrize(
    "case", 
    test_cases, 
    ids=[f"{c['id']}-{c['name']}" for c in test_cases]
)
def test_with_ids(case):
    assert True
# 輸出將顯示: test_with_ids[TC001-Success Case]`,
        language: 'python',
      },
    ],

    codeExamples: [
      {
        title: '綜合實戰：CSV 數據驅動',
        code: `import csv
import pytest

def get_csv_data():
    with open('data.csv', 'r') as f:
        reader = csv.DictReader(f)
        return list(reader)

@pytest.mark.parametrize("data", get_csv_data())
def test_user_login(data):
    username = data['user']
    password = data['pwd']
    expected = data['result']
    
    # 模擬登入
    print(f"Testing {username}...")
    assert "success" == expected`,
        language: 'python',
        explanation: 'CSV 格式適合存儲大量的簡單結構數據，如用戶帳號列表。',
      },
    ],

    exercises: [
      {
        title: '練習 1: YAML 數據驅動實戰',
        description: '創建一個包含 10 個不同幣種支付場景的 YAML 文件，並編寫測試函數讀取該文件並執行。',
        difficulty: 'medium',
      },
      {
        title: '練習 2: 多文件合併加載',
        description: '編寫一個工具函數，能自動掃描 data/ 目錄下的所有 JSON 文件並合併成一個大型測試列表。',
        difficulty: 'hard',
      },
    ],

    interviewTips: [
      {
        question: 'YAML 和 JSON 在測試數據管理中哪個更好？',
        answer: 'YAML 通常更好。理由：1) 支持註釋，方便說明測試意圖；2) 語法更簡潔，不需要括號和引號；3) 支持多行字串，適合存儲複雜的 Payload。JSON 則更適合機器處理。',
        priority: 'high',
      },
      {
        question: '如果測試數據中包含敏感信息（如密碼）怎麼辦？',
        answer: '1) 數據脫敏，使用測試專用帳號；2) 使用加密庫對敏感欄位加密，在代碼中解密；3) 通過環境變量注入，不保存在數據文件中。',
        priority: 'high',
      },
    ],

    resources: [
      {
        type: 'doc',
        title: 'PyYAML 官方文檔',
        url: 'https://pyyaml.org/wiki/PyYAMLDocumentation',
        description: '學習 YAML 解析',
      },
    ],

    prerequisites: ['Day 4: pytest 基礎'],
    nextSteps: ['Day 11: 支付系統測試深度實戰'],
  },

  // ==================== DAY 11 ====================
  {
    id: 'day11',
    title: 'Day 11: 支付系統測試深度實戰 (Workflow & Logic)',
    description: '深入探討支付系統的業務邏輯，掌握退款、風控、狀態機及各類異常場景的測試設計與自動化實現',
    week: 2,
    day: 'Day 11',
    category: 'Payment',
    icon: 'account_tree',
    status: 'backlog',
    progress: 0,
    color: '#30D158',
    estimatedHours: 8,

    learningObjectives: [
      '✅ 掌握完整的支付訂單生命週期（Lifecycle）',
      '✅ 能夠設計複雜的支付狀態機（State Machine）測試案例',
      '✅ 掌握退款流程（全額、部分、多次退款）的測試要點',
      '✅ 理解支付風控（Risk Control）與限額策略的測試方法',
      '✅ 學會測試支付網關的回調（Callback/Webhook）機制',
      '✅ 掌握手續費（Fee）計算與精度損失的驗證技巧',
    ],

    coreConcepts: [
      {
        term: 'Payment Lifecycle',
        definition: '訂單從創建、支付、清算到可能發生的退款或拒付的全過程。',
        example: 'Created -> Pending -> Success -> Refunding -> Refunded',
        importance: 'critical',
      },
      {
        term: 'Webhook / Callback',
        definition: '支付網關在處理完成後，異步通知商家服務器的機制。測試需驗證簽名、重發邏輯與冪等處理。',
        example: '幣安支付處理完畢後，發送 HTTP POST 給商家的 notify_url。',
        importance: 'critical',
      },
      {
        term: 'Precision Loss (精度損失)',
        definition: '在金融計算中，由於浮點數特性導致的金額微小偏差。測試需驗證系統是否正確使用定點數（如 Decimal）。',
        example: '0.1 + 0.2 在浮點數中不等於 0.3。',
        importance: 'important',
      },
      {
        term: 'Risk Rules',
        definition: '針對用戶、金額、地區、頻率設定的攔截規則，防止洗錢或欺詐。',
        example: '單筆超過 10,000 USDT 需要二級實名認證。',
        importance: 'important',
      },
    ],

    knowledgePoints: [
      {
        title: '1. 支付狀態機測試',
        content: `支付系統的核心是一個複雜的狀態機。我們不僅要測試 "快樂路徑"（Happy Path），更要測試非法狀態轉換。

**測試維度：**
- **合法路徑**：Created -> Success。
- **取消路徑**：Pending -> Cancelled。
- **異常路徑**：Pending -> Failed -> Success (重試成功)。
- **非法路徑**：Success -> Cancelled (已成功的訂單不應被取消)。`,
        codeExample: `# 狀態轉換矩陣測試
@pytest.mark.parametrize("from_status, to_status, expected_allowed", [
    ("CREATED", "PENDING", True),
    ("SUCCESS", "REFUNDING", True),
    ("SUCCESS", "CANCELLED", False), # 非法：成功後不能取消
    ("FAILED", "SUCCESS", True),    # 合法：重試成功
])
def test_status_transition(payment_engine, from_status, to_status, expected_allowed):
    allowed = payment_engine.can_transition(from_status, to_status)
    assert allowed == expected_allowed`,
        language: 'python',
      },
      {
        title: '2. 退款流程深度驗證',
        content: `退款比支付更複雜，涉及原路退回、餘額返還、手續費處理等。

**測試要點：**
- **全額退款**：金額是否完全一致。
- **部分退款**：多次部分退款累加不能超過原訂單金額。
- **退款手續費**：手續費是退還還是額外收取。
- **退款狀態同步**：網關退款成功後，內部訂單狀態是否即時更新。`,
        codeExample: `def test_partial_refund_logic(payment_service):
    order = payment_service.create_order(amount=100)
    payment_service.pay(order.id)
    
    # 第一次退款 40
    payment_service.refund(order.id, amount=40)
    assert payment_service.get_order(order.id).refunded_amount == 40
    
    # 第二次退款 70 (應失敗，超過總額 100)
    with pytest.raises(InsufficientRefundableAmountError):
        payment_service.refund(order.id, amount=70)`,
        language: 'python',
      },
      {
        title: '3. 手續費與精度測試',
        content: `在交易所或支付系統中，涉及多幣種換算和手續費計算。必須確保精度準確。

**測試方法：**
- 使用多位小數進行測試（如 0.00000001 BTC）。
- 驗證捨入規則（四捨五入、無條件捨去、無條件進位）。
- 驗證大額交易下的計算穩定性。`,
        codeExample: `from decimal import Decimal

def calculate_fee(amount, rate):
    # 推薦做法：使用 Decimal
    return (Decimal(str(amount)) * Decimal(str(rate))).quantize(Decimal("0.00000001"))

def test_fee_precision():
    amount = 1.23456789
    rate = 0.001 # 0.1% 手續費
    fee = calculate_fee(amount, rate)
    assert fee == Decimal("0.00123457") # 假設是四捨五入`,
        language: 'python',
      },
    ],

    codeExamples: [
      {
        title: '實戰：模擬 Webhook 回調測試',
        code: `def test_payment_webhook_callback(api_client, mocker):
    # 1. 創建一個 Pending 訂單
    order_id = "ORD_999"
    
    # 2. 模擬網關發送回調
    webhook_payload = {
        "order_id": order_id,
        "status": "PAID",
        "sign": "valid_signature_xyz"
    }
    
    # 調用內部回調接收接口
    response = api_client.post("/webhooks/binance-pay", json=webhook_payload)
    
    # 3. 驗證訂單狀態是否變為 Success
    order_status = api_client.get(f"/orders/{order_id}").json()["status"]
    assert order_status == "SUCCESS"
    assert response.status_code == 200`,
        language: 'python',
        explanation: 'Webhook 測試需要模擬外部系統的行為，驗證內部系統能否正確解析並更新狀態。',
      },
    ],

    exercises: [
      {
        title: '任務 1: 設計退款狀態機',
        description: '畫出退款功能的所有狀態（Refunding, Refunded, Refund_Failed）及轉換邏輯，並列出 5 個異常測試路徑。',
        difficulty: 'medium',
      },
      {
        title: '任務 2: 精度損失 Bug 重現',
        description: '編寫一個 Python 腳本，展示為什麼用 float 計算 0.1+0.2 在支付系統中是危險的。',
        difficulty: 'easy',
      },
    ],

    interviewTips: [
      {
        question: '如果支付成功但回調超時，系統應如何處理？',
        answer: '這涉及 "最終一致性"。處理方式：1) 網關通常有重試機制（如 5s, 10s, 30s... 重發回調）；2) 商家系統應實現主動輪詢任務（Worker），定時查詢 Pending 訂單在網關的最終狀態；3) 確保回調接口具有冪等性，防止重複更新。',
        priority: 'high',
      },
      {
        question: '如何測試支付風控規則？',
        answer: '1) 邊界值測試：如限額 1000，分別測試 999.99, 1000, 1000.01；2) 黑名單測試：模擬黑名單用戶或地區；3) 頻率測試：模擬短時間內大量請求；4) 繞過測試：嘗試修改 Headers 或參數繞過前端驗證。',
        priority: 'high',
      },
    ],

    resources: [
      {
        type: 'article',
        title: '支付系統對帳與結算詳解',
        description: '了解支付系統的後台處理邏輯',
      },
    ],

    prerequisites: ['Day 3: 支付核心概念', 'Day 4: pytest 基礎'],
    nextSteps: ['Day 12: 冪等性與併發測試深度實戰'],
  },

  // ==================== DAY 12 ====================
  {
    id: 'day12',
    title: 'Day 12: 冪等性與併發測試 (Concurrency & Race Conditions)',
    description: '掌握高併發場景下的測試技術，深入理解冪等性防護與競態條件（Race Conditions），確保支付系統的數據一致性',
    week: 2,
    day: 'Day 12',
    category: 'Payment',
    icon: 'rebase_edit',
    status: 'backlog',
    progress: 0,
    color: '#30D158',
    estimatedHours: 8,

    learningObjectives: [
      '✅ 深入理解冪等鍵（Idempotency Key）的設計與驗證',
      '✅ 掌握使用多線程（Threading）模擬併發請求的方法',
      '✅ 理解競態條件（Race Conditions）對餘額更新的影響',
      '✅ 掌握分散式鎖（Distributed Locks）的測試驗證',
      '✅ 學會設計 "雙重扣款" 和 "超扣" 的測試場景',
      '✅ 掌握樂觀鎖與悲觀鎖在資料庫層面的應用',
    ],

    coreConcepts: [
      {
        term: 'Idempotency Key',
        definition: '客戶端生成的唯一標識，服務端憑此識別重複請求。相同 Key 的請求應返回相同結果且只處理一次。',
        example: 'X-Idempotency-Key: 550e8400-e29b-41d4-a716-446655440000',
        importance: 'critical',
      },
      {
        term: 'Race Condition (競態條件)',
        definition: '多個線程或進程同時訪問並嘗試修改同一數據，最終結果取決於執行順序。',
        example: '餘額 100，兩個請求同時扣 80，若無防護可能導致扣成 -60。',
        importance: 'critical',
      },
      {
        term: 'Distributed Lock (分散式鎖)',
        definition: '在分散式系統中確保同一資源在同一時間僅被一個節點處理。常用 Redis (SETNX) 實現。',
        example: '請求進來先去 Redis 佔坑，成功才處理支付，處理完釋放。',
        importance: 'important',
      },
      {
        term: 'Optimistic Locking (樂觀鎖)',
        definition: '假設衝突機率低，更新時檢查版本號（Version）。若版本已變則更新失敗。',
        example: 'UPDATE balance SET val=val-10, version=version+1 WHERE id=1 AND version=5',
        importance: 'important',
      },
    ],

    knowledgePoints: [
      {
        title: '1. 冪等性深度驗證',
        content: `冪等性不僅僅是返回 200。我們需要從多個維度驗證：

**驗證點：**
- **響應一致性**：第二次請求返回的 payment_id、amount 等應與第一次完全相同。
- **副作用驗證**：檢查資料庫，確保流水記錄僅有一條，餘額僅扣除一次。
- **異時請求**：間隔 1 秒、1 分鐘、1 小時發送相同 Key，結果應依然冪等。
- **參數修改**：如果 Key 相同但金額不同，系統應報錯（或返回第一次的結果，取決於設計）。`,
        codeExample: `def test_idempotency_with_db_check(api_client, db_helper):
    key = str(uuid.uuid4())
    payload = {"amount": 100, "currency": "USDT"}
    
    # 1. 發送兩次相同請求
    resp1 = api_client.post("/pay", json=payload, headers={"X-Idempotency-Key": key})
    resp2 = api_client.post("/pay", json=payload, headers={"X-Idempotency-Key": key})
    
    # 2. 驗證響應 ID 一致
    assert resp1.json()["order_id"] == resp2.json()["order_id"]
    
    # 3. 驗證資料庫流水只有一筆
    count = db_helper.query_count(f"SELECT * FROM transactions WHERE idempotency_key='{key}'")
    assert count == 1`,
        language: 'python',
      },
      {
        title: '2. 併發測試工具：ThreadPoolExecutor',
        content: `Python 的 \`concurrent.futures.ThreadPoolExecutor\` 是模擬大量併發請求的利器。

**核心步驟：**
1. 準備測試帳號和充足餘額。
2. 創建線程池。
3. 同時提交多個請求任務。
4. 收集結果並分析成功率。`,
        codeExample: `from concurrent.futures import ThreadPoolExecutor

def test_concurrent_withdraw(api_client):
    # 初始餘額 100，嘗試同時提現 3 筆 80
    results = []
    
    def task():
        return api_client.post("/withdraw", json={"amount": 80})

    with ThreadPoolExecutor(max_workers=10) as executor:
        # 同時啟動 10 個線程
        futures = [executor.submit(task) for _ in range(10)]
        results = [f.result().status_code for f in futures]
    
    # 預期：只有 1 筆成功 (201)，其他應失敗 (400 或 429)
    success_count = results.count(201)
    assert success_count == 1`,
        language: 'python',
      },
      {
        title: '3. 數據一致性驗證',
        content: `併發測試後，最重要的步驟是驗證 "最終帳實相符"。

**對帳公式：**
\`期末餘額 = 期初餘額 + 充值總額 - 提現總額 - 手續費總額\`

如果公式不成立，說明系統存在併發漏洞（如超扣或重複入帳）。`,
        codeExample: `def test_balance_consistency_after_load(api_client, db_helper):
    initial = api_client.get_balance()
    
    # 執行大量併發交易...
    run_heavy_load_test()
    
    # 獲取最終數據
    final = api_client.get_balance()
    total_spent = db_helper.get_sum("SELECT amount FROM orders WHERE status='SUCCESS'")
    
    assert final == initial - total_spent`,
        language: 'python',
      },
    ],

    codeExamples: [
      {
        title: '實戰：測試 Redis 分散式鎖',
        code: `def test_distributed_lock_behavior(mocker, payment_service):
    # 模擬 Redis 鎖被佔用的場景
    # 當支付請求 A 還在處理時，請求 B 進來
    
    mocker.patch("utils.redis.set_lock", return_value=False) # 模擬鎖佔用
    
    response = payment_service.process_payment(amount=100)
    
    # 預期：系統應返回 "處理中" 或 "請稍後重試"
    assert response.status_code == 429
    assert "System busy" in response.text`,
        language: 'python',
        explanation: '通過 Mock 分散式鎖的返回值，可以驗證系統在資源競爭時的保護機制是否生效。',
      },
    ],

    exercises: [
      {
        title: '任務 1: 模擬 Race Condition',
        description: '編寫兩個 Python 線程同時對一個全局變量 balance 執行 1000 次 +1 操作，觀察最終結果是否為 2000，並思考如何修復。',
        difficulty: 'medium',
      },
      {
        title: '任務 2: 設計冪等性測試矩陣',
        description: '針對 "重複提交"、"網路重傳"、"超時後重試" 三個場景，分別列出測試步驟和預期結果。',
        difficulty: 'medium',
      },
    ],

    interviewTips: [
      {
        question: '如何發現系統中的 Race Condition？',
        answer: '1) 代碼審查：檢查餘額更新是否使用了原子操作或鎖；2) 壓力測試：使用 ThreadPoolExecutor 併發發送請求；3) 監控日誌：查找是否有重複的流水號或負數餘額；4) 數據對帳：檢查期末餘額與流水總額是否匹配。',
        priority: 'high',
      },
      {
        question: '什麼是樂觀鎖？它如何解決併發問題？',
        answer: '樂觀鎖通過版本號（Version）實現。每次更新時，SQL 會帶上 version 條件。如果數據被別人改過，version 會不匹配，更新行數為 0，程序隨即拋出異常並回滾。這避免了傳統鎖帶來的性能開銷，適合讀多寫少的場景。',
        priority: 'high',
      },
    ],

    resources: [
      {
        type: 'article',
        title: 'Distributed Locks with Redis',
        url: 'https://redis.io/docs/manual/patterns/redlock/',
        description: '了解 Redis 分散式鎖的原理',
      },
    ],

    prerequisites: ['Day 11: 支付系統測試深度實戰'],
    nextSteps: ['Day 13: 資料庫測試與數據一致性'],
  },

  // ==================== DAY 13 ====================
  {
    id: 'day13',
    title: 'Day 13: 資料庫測試與數據一致性 (Database Testing)',
    description: '學習如何驗證後端 API 操作與資料庫狀態的一致性，掌握 SQL 查詢驗證、事務回滾與大數據量下的測試策略',
    week: 2,
    day: 'Day 13',
    category: 'Database',
    icon: 'storage',
    status: 'backlog',
    progress: 0,
    color: '#5E5CE6',
    estimatedHours: 8,

    learningObjectives: [
      '✅ 掌握在自動化測試中連接與操作資料庫（PyMySQL/SQLAlchemy）',
      '✅ 學會編寫 "斷言資料庫" 的測試腳本（CRUD 驗證）',
      '✅ 理解 ACID 特性及其在支付測試中的重要性',
      '✅ 掌握測試數據的準備與清理策略（Cleanup/Truncate）',
      '✅ 學會測試資料庫事務（Transaction）與回滾（Rollback）',
      '✅ 掌握基本索引（Index）對查詢效能影響的驗證',
    ],

    coreConcepts: [
      {
        term: 'ACID Properties',
        definition: '資料庫事務的四個特性：原子性（Atomicity）、一致性（Consistency）、隔離性（Isolation）、持久性（Durability）。支付系統必須嚴格遵守 ACID。',
        example: '轉帳過程：A 扣錢與 B 加錢必須同時成功，否則全部回滾。',
        importance: 'critical',
      },
      {
        term: 'Data Integrity (數據完整性)',
        definition: '確保資料庫中數據的準確性和一致性，包括實體完整性、參照完整性（外鍵）和域完整性。',
        example: '訂單表中的 user_id 必須在用戶表中真實存在。',
        importance: 'important',
      },
      {
        term: 'Cleanup Strategy',
        definition: '測試結束後清理產生的髒數據。常用方法：測試後刪除、使用事務回滾、或定期重置測試資料庫。',
        example: 'yield 之後執行 DELETE FROM orders WHERE order_id = "test_id"',
        importance: 'important',
      },
    ],

    knowledgePoints: [
      {
        title: '1. 為什麼要測試資料庫？',
        content: `僅測試 API 響應（黑盒）是不夠的。

**資料庫測試的必要性：**
- **隱蔽錯誤**：API 返回 200，但資料庫可能沒寫入或寫入了錯誤的數據。
- **數據冗餘**：檢查是否產生了重複的記錄。
- **狀態驗證**：驗證訂單狀態機在資料庫層面的正確性。
- **效能瓶頸**：驗證在高併發下資料庫是否出現死鎖（Deadlock）或慢查詢。`,
        codeExample: `# 使用 PyMySQL 連接資料庫
import pymysql

def get_db_connection():
    return pymysql.connect(
        host='localhost',
        user='test_user',
        password='password',
        database='payment_db',
        cursorclass=pymysql.cursors.DictCursor
    )

def test_db_record_exists():
    conn = get_db_connection()
    try:
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM orders WHERE id='ORD_123'")
            result = cursor.fetchone()
            assert result is not None
            assert result['status'] == 'SUCCESS'
    finally:
        conn.close()`,
        language: 'python',
      },
      {
        title: '2. 數據準備與清理 (Fixture)',
        content: `使用 pytest fixture 實現數據的 "即用即建，用完即刪"，保持測試環境純淨。`,
        codeExample: `@pytest.fixture
def test_order_in_db(db_helper):
    # Setup: 插入測試數據
    order_id = "TEST_ORD_001"
    db_helper.execute(f"INSERT INTO orders (id, status) VALUES ('{order_id}', 'PENDING')")
    
    yield order_id # 返回 ID 給測試函數
    
    # Teardown: 清理數據
    db_helper.execute(f"DELETE FROM orders WHERE id='{order_id}'")`,
        language: 'python',
      },
      {
        title: '3. 驗證數據一致性',
        content: `特別是在涉及金額變動的測試中，需要驗證多個表格的數據聯動。`,
        codeExample: `def test_transfer_db_consistency(api_client, db_helper):
    # 1. 紀錄初始餘額
    old_balance = db_helper.query_value("SELECT balance FROM users WHERE id='A'")
    
    # 2. 執行轉帳 API
    api_client.post("/transfer", json={"from": "A", "to": "B", "amount": 50})
    
    # 3. 驗證資料庫兩端數據
    new_balance_a = db_helper.query_value("SELECT balance FROM users WHERE id='A'")
    new_balance_b = db_helper.query_value("SELECT balance FROM users WHERE id='B'")
    
    assert new_balance_a == old_balance - 50
    # 4. 驗證交易流水表
    tx_count = db_helper.query_value("SELECT count(*) FROM tx_logs WHERE from_id='A'")
    assert tx_count == 1`,
        language: 'python',
      },
    ],

    codeExamples: [
      {
        title: '進階：使用 SQLAlchemy 進行測試',
        code: `from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# 設置資料庫引擎
engine = create_engine('mysql+pymysql://user:pass@localhost/db')
Session = sessionmaker(bind=engine)

def test_user_profile_update():
    session = Session()
    try:
        # 修改用戶名
        user = session.query(User).filter_by(id=1).first()
        user.username = "NewName"
        session.commit()
        
        # 重新查詢驗證
        updated_user = session.query(User).filter_by(id=1).first()
        assert updated_user.username == "NewName"
    finally:
        session.close()`,
        language: 'python',
        explanation: 'SQLAlchemy 提供了更高級的 ORM 接口，使資料庫測試代碼更具可讀性且易於維護。',
      },
    ],

    exercises: [
      {
        title: '任務 1: 編寫 SQL 驗證腳本',
        description: '編寫一個 Python 函數，輸入 order_id，到資料庫中查詢並返回該訂單的所有欄位信息。',
        difficulty: 'easy',
      },
      {
        title: '任務 2: 模擬事務回滾測試',
        description: '在測試環境中發起一個包含兩個 SQL 動作的事務，手動在第二個動作處拋出異常，驗證第一個動作是否已成功回滾。',
        difficulty: 'hard',
      },
    ],

    interviewTips: [
      {
        question: '如何測試資料庫的併發死鎖（Deadlock）？',
        answer: '1) 使用多個線程同時更新相互依賴的行（例如 A 轉 B 的同時 B 轉 A）；2) 檢查資料庫錯誤日誌，查看是否有 "Deadlock found" 報警；3) 驗證應用程序是否具有重試機制來處理死鎖異常。',
        priority: 'medium',
      },
      {
        question: '什麼是慢查詢？QA 如何在測試中發現它？',
        answer: '執行時間超過預設閾值（如 1s）的 SQL。QA 可以：1) 在測試環境開啟 Slow Query Log；2) 使用 EXPLAIN 分析關鍵 SQL 的執行計畫，檢查是否命中了索引；3) 進行大數據量測試（如百萬級）觀察查詢性能。',
        priority: 'high',
      },
    ],

    resources: [
      {
        type: 'doc',
        title: 'SQLAlchemy Testing Guide',
        url: 'https://docs.sqlalchemy.org/en/20/orm/session_transaction.html',
        description: '學習如何管理測試中的事務',
      },
    ],

    prerequisites: ['Day 13: 資料庫測試與數據一致性'],
    nextSteps: ['Day 14: 效能測試基礎 (Locust)'],
  },

  // ==================== DAY 14 ====================
  {
    id: 'day14',
    title: 'Day 14: 效能測試基礎 (Performance Testing & Locust)',
    description: '掌握效能測試的核心指標與測試類型，學習使用 Python 化的 Locust 工具編寫並執行高併發負載測試',
    week: 2,
    day: 'Day 14',
    category: 'Testing',
    icon: 'speed',
    status: 'backlog',
    progress: 0,
    color: '#FF9F0A',
    estimatedHours: 8,

    learningObjectives: [
      '✅ 理解效能測試的核心指標（RPS, Latency, Throughput）',
      '✅ 區分負載測試、壓力測試、飆升測試與穩定性測試',
      '✅ 掌握 Locust 框架的安裝與基本腳本編寫',
      '✅ 學會設計用戶行為模型（Tasks & Weight）',
      '✅ 能夠分析效能測試報告中的 P95, P99 指標',
      '✅ 理解全鏈路壓測的概念及其在支付系統中的應用',
    ],

    coreConcepts: [
      {
        term: 'RPS (Requests Per Second)',
        definition: '每秒請求數。衡量系統吞吐量（Throughput）的關鍵指標。',
        example: '系統穩定支持 2000 RPS。',
        importance: 'critical',
      },
      {
        term: 'P95 / P99 Latency',
        definition: '第 95 或 99 百分位數的響應時間。比平均值更能反映長尾效應和極端用戶體驗。',
        example: 'P99 < 500ms 意味著 99% 的用戶響應時間都在 500ms 以內。',
        importance: 'critical',
      },
      {
        term: 'Load Testing (負載測試)',
        definition: '在預期負載下測試系統性能，驗證系統是否達到設計目標。',
        example: '模擬 500 名併發用戶正常轉帳。',
        importance: 'important',
      },
      {
        term: 'Stress Testing (壓力測試)',
        definition: '不斷增加負載直到系統崩潰，找出系統的極限（Breaking Point）與恢復能力。',
        example: '增加併發直到支付成功率低於 90%。',
        importance: 'important',
      },
    ],

    knowledgePoints: [
      {
        title: '1. 效能測試指標詳解',
        content: `效能測試不僅僅是看 "快不快"。

**核心指標：**
- **響應時間 (Response Time)**：從發出請求到收到響應的時間。
- **吞吐量 (Throughput)**：單位時間內處理的請求量。
- **錯誤率 (Error Rate)**：失敗請求佔總請求的比例。
- **資源利用率 (Resource Utilization)**：CPU、內存、磁碟 I/O 和網絡頻寬的消耗情況。

**為什麼平均值會騙人？**
如果 90 個請求是 10ms，10 個請求是 2s，平均值是 209ms。但那 10% 的用戶體驗極差。這就是為什麼要看 P95/P99。`,
        codeExample: `# Locust 輸出示例
Name            # reqs      # fails  |     Avg     Min     Max  Median  |   req/s
--------------------------------------------------------------------------------
POST /pay        5000     0(0.00%)  |     156      42    1205     110  |   250.0`,
        language: 'text',
      },
      {
        title: '2. Locust 腳本基礎',
        content: `Locust 是基於 Python 的性能測試工具。

**優勢：**
- **代碼即測試**：使用純 Python 編寫測試場景。
- **高併發**：基於協程（Gevent），單機可模擬數千用戶。
- **分佈式**：支持多機聯動壓測。`,
        codeExample: `from locust import HttpUser, task, between

class WebsiteUser(HttpUser):
    # 每個用戶執行任務後的等待時間（1-5秒）
    wait_time = between(1, 5)

    @task(3) # 權重為 3
    def view_balance(self):
        self.client.get("/api/v1/balance")

    @task(1) # 權重為 1
    def make_payment(self):
        self.client.post("/api/v1/pay", json={
            "amount": 10,
            "currency": "USDT"
        })`,
        language: 'python',
      },
      {
        title: '3. 壓力測試場景設計',
        content: `一個完整的壓測計畫應包含不同的階梯。

**常見模型：**
- **階梯式加壓**：每 5 分鐘增加 100 用戶，直到發現瓶頸。
- **飆升測試 (Spike Test)**：瞬間增加 10 倍流量，測試系統的突發處理能力。
- **穩定性測試 (Soak Test)**：在 70% 負載下運行 24 小時，檢查是否有內存洩漏。`,
        codeExample: `# 執行命令啟動 Web UI
# locust -f locustfile.py --host=https://api.test.com

# 無介面模式運行（CI/CD 常用）
# locust -f locustfile.py --headless -u 100 -r 10 --run-time 1h`,
        language: 'bash',
      },
    ],

    codeExamples: [
      {
        title: '進階：帶認證的 Locust 腳本',
        code: `from locust import HttpUser, task, events

class BinanceUser(HttpUser):
    def on_start(self):
        """用戶啟動時執行（如登入）"""
        response = self.client.post("/login", json={"user": "qa", "pw": "123"})
        self.token = response.json()["token"]
        self.client.headers.update({"Authorization": f"Bearer {self.token}"})

    @task
    def get_ticker(self):
        with self.client.get("/api/v3/ticker/price", catch_response=True) as response:
            if response.status_code == 200:
                response.success()
            else:
                response.failure("Custom error message")`,
        language: 'python',
        explanation: 'on_start 用於執行前置操作。catch_response=True 允許你自定義請求的成功或失敗判定邏輯。',
      },
    ],

    exercises: [
      {
        title: '任務 1: 編寫基礎 Locust 腳本',
        description: '為一個查詢 API 編寫 Locust 腳本，模擬 50 個併發用戶，每秒增加 5 個用戶。',
        difficulty: 'medium',
      },
      {
        title: '任務 2: 分析 P99 指標',
        description: '運行壓測並導出 CSV，找出響應時間最慢的前 1% 請求，並嘗試分析可能的原因。',
        difficulty: 'medium',
      },
    ],

    interviewTips: [
      {
        question: '負載測試（Load）和壓力測試（Stress）有什麼區別？',
        answer: '負載測試是驗證系統在 "預期正常負載" 下的表現（是否達標）；壓力測試是將系統推向 "極限"（何時崩潰）。打個比方：負載測試是看你背著 20 公斤能不能走 10 公里，壓力測試是看你最多能背幾公斤直到把你壓垮。',
        priority: 'high',
      },
      {
        question: '發現性能瓶頸後，你會從哪些方面進行排查？',
        answer: '1) 應用層：是否有慢代碼、鎖競爭、內存洩漏；2) 資料庫：是否有慢 SQL、缺少索引、連接池耗盡；3) 基礎設施：CPU、內存是否滿載，網絡頻寬是否達到上限；4) 中間件：Redis/消息隊列的響應是否延遲。',
        priority: 'high',
      },
    ],

    resources: [
      {
        type: 'doc',
        title: 'Locust 官方文件',
        url: 'https://docs.locust.io/',
        description: '學習現代化的性能測試',
      },
    ],

    prerequisites: ['Day 4: pytest 基礎'],
    nextSteps: ['Day 15: Java 基礎與 RestAssured 入門'],
  },

  // ==================== DAY 15 ====================
  {
    id: 'day15',
    title: 'Day 15: Java 基礎與 RestAssured 入門',
    description: '掌握 Java 語言基礎語法與 Maven 專案管理，學習使用 RestAssured 進行 API 測試的基礎 given-when-then 語法',
    week: 3,
    day: 'Day 15',
    category: 'Java',
    icon: 'coffee',
    status: 'backlog',
    progress: 0,
    color: '#FF453A',
    estimatedHours: 8,

    learningObjectives: [
      '✅ 完成 Java 開發環境配置（JDK 11+, IntelliJ, Maven）',
      '✅ 掌握 Java 基礎語法（變數類型、條件判斷、循環）',
      '✅ 理解 Maven 的 pom.xml 配置與依賴管理',
      '✅ 掌握 RestAssured 的 BDD 風格語法 (given-when-then)',
      '✅ 學會發送基本的 GET 與 POST 請求',
      '✅ 掌握 RestAssured 中的基礎斷言方法',
    ],

    coreConcepts: [
      {
        term: 'Maven',
        definition: 'Java 的專案管理與自動化構建工具，通過 pom.xml 管理套件依賴與編譯生命週期。',
        example: '<dependency>...</dependency>',
        importance: 'critical',
      },
      {
        term: 'RestAssured',
        definition: '一個專門測試 REST API 的 Java DSL，支持 BDD（行為驅動開發）語法，與 Java 測試框架（如 TestNG/JUnit）完美集成。',
        example: 'given().get(url).then().statusCode(200)',
        importance: 'critical',
      },
      {
        term: 'BDD Syntax',
        definition: 'given（前置條件）、when（觸發操作）、then（預期結果）的語法結構。',
        example: 'given().auth().none().when().get().then().log().all()',
        importance: 'important',
      },
    ],

    knowledgePoints: [
      {
        title: '1. Java vs Python (QA 視角)',
        content: `幣安的後端系統主要基於 Java (Spring Boot)，因此 QA 需要具備 Java API 測試能力。

**核心差異：**
- **靜態類型**：Java 必須宣告變數類型 (\`String name = "Alice"\`)。
- **編譯型**：Java 代碼需編譯成位元碼才能執行。
- **冗長度**：Java 的樣板代碼較多，但結構嚴謹。
- **生態系**：Java 在企業級測試（RestAssured, TestNG）中極其成熟。`,
        codeExample: `// Java 基礎結構
public class HelloWorld {
    public static void main(String[] args) {
        String message = "Hello, Binance QA";
        System.out.println(message);
    }
}`,
        language: 'java',
      },
      {
        title: '2. RestAssured 基礎語法',
        content: `RestAssured 的語法非常直觀，適合編寫可讀性高的測試。

**Given**: 設置參數、Headers、Body、Auth。
**When**: 執行請求（get, post, put, delete）。
**Then**: 驗證響應（status code, body, headers）。`,
        codeExample: `import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class ApiTest {
    @Test
    public void testGetTicker() {
        given()
            .baseUri("https://api.binance.com")
            .param("symbol", "BTCUSDT")
        .when()
            .get("/api/v3/ticker/price")
        .then()
            .statusCode(200)
            .body("symbol", equalTo("BTCUSDT"))
            .body("price", notNullValue());
    }
}`,
        language: 'java',
      },
      {
        title: '3. Maven pom.xml 配置',
        content: `Maven 是 Java 專案的靈魂，用於導入 RestAssured 和 TestNG。`,
        codeExample: `<!-- pom.xml 依賴配置 -->
<dependencies>
    <dependency>
        <groupId>io.rest-assured</groupId>
        <artifactId>rest-assured</artifactId>
        <version>5.3.0</version>
        <scope>test</scope>
    </dependency>
</dependencies>`,
        language: 'xml',
      },
    ],

    codeExamples: [
      {
        title: '實戰：POST 請求與 JSON 驗證',
        code: `import io.restassured.http.ContentType;
import static io.restassured.RestAssured.*;

public class PostTest {
    @Test
    public void testCreatePayment() {
        String body = "{\"amount\": 100, \"currency\": \"USDT\"}";

        given()
            .contentType(ContentType.JSON)
            .body(body)
        .when()
            .post("https://api.test.com/pay")
        .then()
            .statusCode(201)
            .body("status", equalTo("success"))
            .body("id", matchesPattern("pay_\\d+"));
    }
}`,
        language: 'java',
        explanation: '展示了如何設置 Content-Type、傳遞 JSON Body 以及使用正則表達式驗證響應。',
      },
    ],

    exercises: [
      {
        title: '任務 1: 環境搭建',
        description: '安裝 JDK 11+，配置環境變數，並在 IntelliJ 中創建一個 Maven 專案。',
        difficulty: 'easy',
      },
      {
        title: '任務 2: 第一個 Java API 測試',
        description: '使用 RestAssured 對 JSONPlaceholder 發送一個 GET 請求，並驗證返回的 status code 為 200。',
        difficulty: 'medium',
      },
    ],

    interviewTips: [
      {
        question: '為什麼 Java 在 API 自動化測試中很受歡迎？',
        answer: '1) 強類型減少了運行時錯誤；2) RestAssured 提供強大的 DSL 語法；3) 與 CI/CD 工具（Jenkins）整合度高；4) 豐富的斷言庫（Hamcrest, AssertJ）和報告工具（Allure）。',
        priority: 'high',
      },
      {
        question: 'RestAssured 中的 log().all() 有什麼作用？',
        answer: '它用於調試。可以打印完整的請求信息（URL, Headers, Body）或響應信息，幫助開發者快速定位為什麼 API 請求失敗。',
        priority: 'medium',
      },
    ],

    resources: [
      {
        type: 'doc',
        title: 'RestAssured Guide',
        url: 'https://rest-assured.io/',
        description: '官方入門指南',
      },
    ],

    prerequisites: ['Week 1 & 2: Python 測試基礎'],
    nextSteps: ['Day 16: RestAssured 進階與 JSON 解析'],
  },

  // ==================== DAY 16 ====================
  {
    id: 'day16',
    title: 'Day 16: RestAssured 進階與 JSON 解析',
    description: '深入掌握 RestAssured 的進階功能，學習使用 JSONPath 提取數據、實現 POJO 反序列化以及請求配置的重用',
    week: 3,
    day: 'Day 16',
    category: 'Java',
    icon: 'data_object',
    status: 'backlog',
    progress: 0,
    color: '#FF453A',
    estimatedHours: 8,

    learningObjectives: [
      '✅ 熟練使用 JSONPath 提取響應中的特定欄位或列表',
      '✅ 掌握 POJO (Plain Old Java Object) 模式與序列化/反序列化',
      '✅ 學會使用 RequestSpecification 重用請求標頭與認證',
      '✅ 掌握 ResponseSpecification 統一驗證標準響應',
      '✅ 學會處理複雜的嵌套 JSON 結構',
      '✅ 掌握 RestAssured 中的文件上傳與下載測試',
    ],

    coreConcepts: [
      {
        term: 'JSONPath',
        definition: '一種從 JSON 文檔中提取特定數據的語法。RestAssured 內置了支持。',
        example: 'data.users[0].id',
        importance: 'critical',
      },
      {
        term: 'Deserialization (反序列化)',
        definition: '將 JSON 字串自動轉換為 Java 對象（POJO）。常用庫包括 Jackson 或 Gson。',
        example: 'User user = response.as(User.class);',
        importance: 'critical',
      },
      {
        term: 'RequestSpecBuilder',
        definition: '用於構建可重用的請求配置（如 Base URL, Headers），減少代碼冗餘。',
        example: 'given().spec(requestSpec)',
        importance: 'important',
      },
      {
        term: 'POJO',
        definition: '簡單的 Java 對象，僅包含屬性、Getter 和 Setter。用於映射 API 的數據結構。',
        example: 'public class Order { private String id; ... }',
        importance: 'important',
      },
    ],

    knowledgePoints: [
      {
        title: '1. JSONPath 提取實戰',
        content: `當 API 返回複雜的 JSON 時，我們需要提取特定值用於下一個請求或斷言。

**常用提取方法：**
- **getString()**: 提取字串。
- **getList()**: 提取列表。
- **getMap()**: 提取物件。
- **使用路徑運算符**: 如 \`findAll\`, \`min\`, \`max\`。`,
        codeExample: `import io.restassured.response.Response;
import static io.restassured.RestAssured.*;

Response response = get("/api/users");

// 1. 提取單個值
String firstUserId = response.jsonPath().getString("data[0].id");

// 2. 提取列表並查找
List<String> names = response.jsonPath().getList("data.name");

// 3. 複雜過濾 (GPath)
List<String> activeUsers = response.jsonPath().getList("data.findAll { it.status == 'active' }.name");`,
        language: 'java',
      },
      {
        title: '2. POJO 與數據模型',
        content: `手寫 JSON 字串非常容易出錯。專業做法是使用 Java 對象來代表請求和響應。

**優點：**
- 類型安全。
- IDE 自動補全。
- 代碼更具可維護性。`,
        codeExample: `// 定義 POJO
public class PaymentRequest {
    private double amount;
    private String currency;

    // Getters and Setters...
    public PaymentRequest(double amount, String currency) {
        this.amount = amount;
        this.currency = currency;
    }
}

// 在測試中使用
PaymentRequest req = new PaymentRequest(100.0, "USDT");
given()
    .body(req) // 自動序列化為 JSON
.when()
    .post("/pay");`,
        language: 'java',
      },
      {
        title: '3. Request/Response Specifications',
        content: `將通用的配置（如 Authorization 標頭、內容類型驗證）抽離出來，讓測試代碼只關注業務邏輯。`,
        codeExample: `RequestSpecification requestSpec = new RequestSpecBuilder()
    .setBaseUri("https://api.binance.com")
    .addHeader("X-MBX-APIKEY", "your_key")
    .setContentType(ContentType.JSON)
    .build();

@Test
public void testWithSpec() {
    given()
        .spec(requestSpec)
        .queryParam("symbol", "BTCUSDT")
    .when()
        .get("/api/v3/ticker/price")
    .then()
        .statusCode(200);
}`,
        language: 'java',
      },
    ],

    codeExamples: [
      {
        title: '綜合實戰：提取 Token 並鏈接請求',
        code: `public class TokenChainTest {
    @Test
    public void testChainRequests() {
        // 1. 獲取 Token
        String token = given()
            .formParam("user", "qa")
            .formParam("pw", "123")
        .when()
            .post("/login")
        .then()
            .extract().path("access_token");

        // 2. 使用 Token 進行下一個請求
        given()
            .auth().oauth2(token)
        .when()
            .get("/account/balance")
        .then()
            .statusCode(200)
            .body("balance", greaterThan(0));
    }
}`,
        language: 'java',
        explanation: '這是 API 自動化測試中最典型的場景：從登入響應中提取認證信息並應用於隨後的受保護接口。',
      },
    ],

    exercises: [
      {
        title: '任務 1: 實現 POJO 映射',
        description: '為幣安的 Ticker Price API 定義一個 Java 類，並使用 RestAssured 的 .as() 方法將響應直接轉為該對象。',
        difficulty: 'medium',
      },
      {
        title: '任務 2: 複雜 JSONPath 練習',
        description: '從一個包含多層嵌套（User -> Address -> ZipCode）的 JSON 中提取特定數據並斷言。',
        difficulty: 'medium',
      },
    ],

    interviewTips: [
      {
        question: '如何處理 API 響應中的動態 Key？',
        answer: '如果 Key 是動態的，不能直接使用 POJO 映射。應使用 response.jsonPath().getMap("") 將響應轉為 Map<String, Object>，然後通過遍歷 KeySet 來處理數據。',
        priority: 'medium',
      },
      {
        question: 'RestAssured 中如何打印請求和響應的日誌？',
        answer: '使用 .log().all()。可以放在 given() 後打印請求日誌，或放在 then() 後打印響應日誌。這對於排查 4xx 或 5xx 錯誤非常有幫助。',
        priority: 'high',
      },
    ],

    resources: [
      {
        type: 'doc',
        title: 'JSONPath GitHub',
        url: 'https://github.com/json-path/JsonPath',
        description: '學習更強大的 JSON 查詢語法',
      },
    ],

    prerequisites: ['Day 15: RestAssured 基礎'],
    nextSteps: ['Day 17: TestNG 測試框架與並行執行'],
  },

  // ==================== DAY 17 ====================
  {
    id: 'day17',
    title: 'Day 17: TestNG 測試框架與並行執行',
    description: '掌握 Java 業界標準測試框架 TestNG，學習註解生命週期、數據驅動測試、測試套件配置及多線程並行執行',
    week: 3,
    day: 'Day 17',
    category: 'Java',
    icon: 'assignment',
    status: 'backlog',
    progress: 0,
    color: '#FF453A',
    estimatedHours: 8,

    learningObjectives: [
      '✅ 掌握 TestNG 核心註解（@Test, @Before, @After）的執行順序',
      '✅ 學會使用 @DataProvider 實現數據驅動測試',
      '✅ 掌握 testng.xml 測試套件的配置與過濾',
      '✅ 學會設置測試依賴（dependsOnMethods）與優先級',
      '✅ 掌握 TestNG 的多線程並行執行配置（Parallel Execution）',
      '✅ 理解 TestNG Listeners 用於自定義報告與日誌',
    ],

    coreConcepts: [
      {
        term: 'TestNG',
        definition: 'Next Generation 測試框架，功能比 JUnit 更強大，支持更多的註解、參數化及並行測試，是 Java 自動化測試的首選。',
        example: '@Test(groups = "smoke")',
        importance: 'critical',
      },
      {
        term: 'DataProvider',
        definition: 'TestNG 的參數化機制，可以從方法返回一個二維對象數組 Object[][]，實現數據驅動測試。',
        example: '@Test(dataProvider = "userData")',
        importance: 'critical',
      },
      {
        term: 'testng.xml',
        definition: '用於定義測試套件（Suite）、測試範圍（Test）及參數的配置文件，支持細粒度的控制。',
        example: '<suite name="SmokeSuite" parallel="methods">',
        importance: 'important',
      },
      {
        term: 'Priority',
        definition: '指定測試方法的執行順序，數字越小越先執行。',
        example: '@Test(priority = 1)',
        importance: 'important',
      },
    ],

    knowledgePoints: [
      {
        title: '1. TestNG 生命週期註解',
        content: `理解註解的執行順序對於設置測試前置條件至關重要。

**層級結構：**
1. **@BeforeSuite**: 整個套件運行前。
2. **@BeforeTest**: testng.xml 中 <test> 標籤運行前。
3. **@BeforeClass**: 當前類運行前。
4. **@BeforeMethod**: 每個 @Test 方法運行前（最常用，用於 Setup）。`,
        codeExample: `public class TestBase {
    @BeforeMethod
    public void setup() {
        System.out.println("初始化 API 客戶端...");
    }

    @Test
    public void testA() {
        System.out.println("執行測試 A");
    }

    @AfterMethod
    public void teardown() {
        System.out.println("清理測試數據...");
    }
}`,
        language: 'java',
      },
      {
        title: '2. @DataProvider 數據驅動',
        content: `不同於 pytest 的裝飾器，TestNG 使用專門的方法來提供數據。`,
        codeExample: `@DataProvider(name = "paymentData")
public Object[][] getData() {
    return new Object[][] {
        {100, "USDT", 201},
        {0, "USDT", 400},
        {-10, "USDT", 400}
    };
}

@Test(dataProvider = "paymentData")
public void testPayment(int amount, String currency, int expectedCode) {
    given()
        .body(new Payment(amount, currency))
    .when()
        .post("/pay")
    .then()
        .statusCode(expectedCode);
}`,
        language: 'java',
      },
      {
        title: '3. 並行執行 (Parallel Execution)',
        content: `在高併發測試中，我們需要並行執行多個測試以節省時間。在 testng.xml 中配置即可。`,
        codeExample: `<!-- testng.xml -->
<suite name="RegressionSuite" parallel="methods" thread-count="5">
    <test name="PaymentTests">
        <classes>
            <class name="tests.PaymentTest" />
        </classes>
    </test>
</suite>`,
        language: 'xml',
      },
    ],

    codeExamples: [
      {
        title: '實戰：測試依賴與軟斷言',
        code: `public class WorkflowTest {
    @Test
    public void login() {
        System.out.println("登入...");
    }

    @Test(dependsOnMethods = "login")
    public void checkout() {
        SoftAssert softAssert = new SoftAssert();
        System.out.println("結帳...");
        softAssert.assertEquals(1, 1);
        softAssert.assertAll(); // 收集所有斷言結果
    }
}`,
        language: 'java',
        explanation: 'dependsOnMethods 確保只有在登入成功後才執行結帳測試。SoftAssert 允許在一個測試中運行多個斷言，即使中間有失敗也會繼續執行直到 assertAll()。',
      },
    ],

    exercises: [
      {
        title: '任務 1: 配置 testng.xml',
        description: '創建一個包含兩個測試類的 Suite，並配置為 parallel="classes" 模式運行。',
        difficulty: 'medium',
      },
      {
        title: '任務 2: 實現 DataProvider',
        description: '編寫一個 DataProvider 方法從外部 CSV 文件讀取數據並返回給測試方法。',
        difficulty: 'hard',
      },
    ],

    interviewTips: [
      {
        question: 'TestNG 和 JUnit 有什麼區別？',
        answer: 'TestNG 比 JUnit 4 提供了更多的功能，如：1) 靈活的參數化 (@DataProvider)；2) 測試依賴機制；3) 更強大的分組 (Groups)；4) 內置支持並行執行而不需要額外插件。',
        priority: 'high',
      },
      {
        question: '如何處理失敗測試的重試 (Retry)？',
        answer: '可以實現 IRetryAnalyzer 接口，定義重試邏輯（如最多重試 3 次），並在 @Test 註解中指定或通過 Listener 全局配置。',
        priority: 'medium',
      },
    ],

    resources: [
      {
        type: 'doc',
        title: 'TestNG Official Documentation',
        url: 'https://testng.org/doc/',
        description: 'TestNG 完整指南',
      },
    ],

    prerequisites: ['Day 15: Java 基礎'],
    nextSteps: ['Day 18: SQL 複雜查詢與資料庫實戰'],
  },

  // ==================== DAY 18 ====================
  {
    id: 'day18',
    title: 'Day 18: SQL 複雜查詢與資料庫實戰',
    description: '深入掌握關聯式資料庫的高級查詢技巧，學習多表關聯、子查詢、窗口函數及執行計畫分析',
    week: 3,
    day: 'Day 18',
    category: 'Database',
    icon: 'database',
    status: 'backlog',
    progress: 0,
    color: '#5E5CE6',
    estimatedHours: 8,

    learningObjectives: [
      '✅ 掌握各種 JOIN（Inner, Left, Right, Full）的應用場景',
      '✅ 熟練編寫嵌套子查詢（Subqueries）與關聯子查詢',
      '✅ 掌握聚合函數（GROUP BY, HAVING）進行數據統計',
      '✅ 學會使用窗口函數（ROW_NUMBER, RANK, SUM OVER）',
      '✅ 能夠使用 EXPLAIN 分析 SQL 執行計畫並找出效能瓶頸',
      '✅ 理解索引（B-Tree Index）的原理與失效場景',
    ],

    coreConcepts: [
      {
        term: 'JOINS',
        definition: '用於將兩個或多個表中的行結合起來，基於這些表之間的共同欄位。',
        example: 'SELECT * FROM orders LEFT JOIN users ON orders.user_id = users.id',
        importance: 'critical',
      },
      {
        term: 'Window Functions',
        definition: '對一組查詢行執行計算，並為每行返回一個結果，不改變原有行數。',
        example: 'ROW_NUMBER() OVER(PARTITION BY user_id ORDER BY created_at DESC)',
        importance: 'important',
      },
      {
        term: 'EXPLAIN',
        definition: 'MySQL 提供的查詢分析工具，用於展示資料庫如何執行一條 SQL 語句。',
        example: 'EXPLAIN SELECT * FROM transactions WHERE amount > 100',
        importance: 'critical',
      },
      {
        term: 'B-Tree Index',
        definition: '資料庫最常用的索引結構，能大幅提升數據檢索速度，但會增加寫入成本。',
        example: 'CREATE INDEX idx_user_id ON orders(user_id)',
        importance: 'critical',
      },
    ],

    knowledgePoints: [
      {
        title: '1. 多表關聯 (Joins) 與對帳',
        content: `在支付系統中，對帳是最常見的 SQL 應用場景。我們需要將 "內部訂單表" 與 "外部網關流水表" 進行比對。

**對帳邏輯：**
- **一致**：Inner Join 能匹配到的記錄。
- **內部多、外部少（短款）**：Left Join 且外部表為 Null。
- **外部多、內部少（長款）**：Right Join 且內部表為 Null。`,
        codeExample: `-- 查找在內部系統成功但在網關中不存在的訂單 (短款)
SELECT o.id, o.amount 
FROM orders o 
LEFT JOIN gateway_logs g ON o.id = g.external_id 
WHERE o.status = 'SUCCESS' 
AND g.id IS NULL;`,
        language: 'sql',
      },
      {
        title: '2. 聚合與統計 (Group By)',
        content: `QA 常需要統計各幣種的總成交量或各用戶的交易頻率以進行異常檢測。`,
        codeExample: `-- 統計每個幣種今天的交易總額及平均成交價
SELECT 
    symbol, 
    COUNT(*) as total_count, 
    SUM(amount) as total_volume, 
    AVG(price) as avg_price 
FROM trades 
WHERE created_at >= CURDATE()
GROUP BY symbol
HAVING total_volume > 10000;`,
        language: 'sql',
      },
      {
        title: '3. 效能優化與 EXPLAIN',
        content: `如果自動化測試運行緩慢，往往是因為 SQL 沒命中索引。

**EXPLAIN 關鍵欄位：**
- **type**: 訪問類型。\`const\`, \`ref\`, \`range\` 較好，\`ALL\`（全表掃描）最差。
- **key**: 實際使用的索引。如果為 NULL，說明沒用到索引。
- **rows**: 預估掃描的行數。越小越好。`,
        codeExample: `-- 分析查詢效能
EXPLAIN SELECT * FROM users WHERE email = 'test@example.com';`,
        language: 'sql',
      },
    ],

    codeExamples: [
      {
        title: '實戰：找出每個用戶最新的一筆交易',
        code: `-- 使用窗口函數 (推薦)
SELECT * FROM (
    SELECT *, 
    ROW_NUMBER() OVER(PARTITION BY user_id ORDER BY created_at DESC) as rn
    FROM transactions
) t 
WHERE rn = 1;

-- 或者使用子查詢 (傳統方法)
SELECT * FROM transactions t1
WHERE created_at = (
    SELECT MAX(created_at) FROM transactions t2 WHERE t1.user_id = t2.user_id
);`,
        language: 'sql',
        explanation: '這是一個非常常見的面試題，展示了如何處理分組內的極值查詢。',
      },
    ],

    exercises: [
      {
        title: '任務 1: 對帳 SQL 練習',
        description: '撰寫一條 SQL，找出金額不匹配的內外部訂單（金額差異 > 0.01）。',
        difficulty: 'medium',
      },
      {
        title: '任務 2: 索引優化分析',
        description: '對一個沒有索引的表執行查詢並 EXPLAIN，然後添加索引再執行一次，比較 rows 和 type 的變化。',
        difficulty: 'medium',
      },
    ],

    interviewTips: [
      {
        question: 'WHERE 和 HAVING 有什麼區別？',
        answer: 'WHERE 在數據分組前（Group By 前）進行過濾，不能使用聚合函數；HAVING 在數據分組後進行過濾，通常與 GROUP BY 配合使用來過濾聚合後的結果。',
        priority: 'high',
      },
      {
        question: '什麼是覆蓋索引 (Covering Index)？',
        answer: '如果一條 SQL 查詢的所有欄位都包含在某個索引中，資料庫就不需要再回表（回到原數據行）查詢，直接從索引中就能獲取所有結果。這能大幅提升性能。',
        priority: 'high',
      },
    ],

    resources: [
      {
        type: 'doc',
        title: 'MySQL EXPLAIN 詳解',
        url: 'https://dev.mysql.com/doc/refman/8.0/en/explain-output.html',
        description: '掌握 SQL 調優的必修課',
      },
    ],

    prerequisites: ['Day 13: 資料庫測試基礎'],
    nextSteps: ['Day 19: 數據一致性驗證與效能調優'],
  },

  // ==================== DAY 19 ====================
  {
    id: 'day19',
    title: 'Day 19: 數據一致性驗證與效能調優',
    description: '掌握高級數據驗證技術，學習使用 CTE 簡化複雜查詢，並深入探討大數據量下的資料庫測試與優化策略',
    week: 3,
    day: 'Day 19',
    category: 'Database',
    icon: 'verified_user',
    status: 'backlog',
    progress: 0,
    color: '#5E5CE6',
    estimatedHours: 8,

    learningObjectives: [
      '✅ 掌握 CTE (Common Table Expressions) 語法簡化多層嵌套查詢',
      '✅ 學會設計端到端（E2E）數據一致性驗證方案',
      '✅ 理解大數據量（百萬/千萬級）對測試環境的挑戰與解決方案',
      '✅ 掌握基本資料庫鎖分析，識別與重現死鎖（Deadlock）場景',
      '✅ 學會測試數據遷移（Migration）與 Schema 變更的風險控制',
      '✅ 掌握慢查詢日誌（Slow Query Log）的分析與優化流程',
    ],

    coreConcepts: [
      {
        term: 'CTE (WITH clause)',
        definition: '定義一個臨時結果集，可在之後的查詢中引用。能大幅提升 SQL 的可讀性與可維護性。',
        example: 'WITH user_total AS (SELECT user_id, SUM(amount) FROM orders GROUP BY user_id) SELECT * FROM user_total',
        importance: 'important',
      },
      {
        term: 'Data Migration Testing',
        definition: '驗證數據從一個系統（或表結構）遷移到另一個系統時，數量、格式及業務邏輯是否保持一致。',
        example: '驗證 V1 版本用戶數據遷移到 V2 後，密碼哈希與餘額是否正確。',
        importance: 'critical',
      },
      {
        term: 'Deadlock (死鎖)',
        definition: '兩個或多個事務互相等待對方釋放鎖，導致系統停滯。在併發測試中需重點關注。',
        example: '事務 1 鎖住 A 請求 B，事務 2 鎖住 B 請求 A。',
        importance: 'important',
      },
      {
        term: 'Schema Validation',
        definition: '驗證資料庫表結構（欄位類型、長度、約束）是否符合設計規範。',
        example: '檢查 amount 欄位是否為 DECIMAL(20, 8) 以保證精度。',
        importance: 'important',
      },
    ],

    knowledgePoints: [
      {
        title: '1. 使用 CTE 進行複雜數據對帳',
        content: `當需要進行多層次的數據比對（如：API 統計值 vs 數據表聚合值 vs 第三方回調值）時，傳統子查詢會讓 SQL 變得極難閱讀。

**CTE 的優勢：**
- 結構化邏輯：將複雜問題分解為多個步驟。
- 可讀性：類似於代碼中的變數定義。
- 效能：在某些資料庫中，CTE 比嵌套子查詢執行得更快。`,
        codeExample: `-- 使用 CTE 統計異常轉帳：轉帳總額超過餘額的 50%
WITH daily_summary AS (
    SELECT user_id, SUM(amount) as total_spent
    FROM transactions
    WHERE created_at >= CURDATE()
    GROUP BY user_id
),
user_balance AS (
    SELECT id, balance FROM users
)
SELECT s.user_id, s.total_spent, b.balance
FROM daily_summary s
JOIN user_balance b ON s.user_id = b.id
WHERE s.total_spent > (b.balance * 0.5);`,
        language: 'sql',
      },
      {
        title: '2. 數據遷移測試策略',
        content: `在幣安這樣的快速迭代環境中，Schema 變更和數據遷移非常頻繁。

**測試 Check-list：**
- **Count 驗證**：遷移前後總記錄數是否一致。
- **Sum 驗證**：核心數值（餘額、積分）累加值是否一致。
- **邊界值抽樣**：選取最大、最小、特殊字符（Null, Emoji）進行比對。
- **回滾驗證**：測試遷移失敗後，數據能否安全恢復。`,
        codeExample: `-- 示例：比對新舊表的餘額一致性
SELECT old.id, old.balance as old_val, new.balance as new_val
FROM old_users_table old
JOIN new_users_table new ON old.id = new.id
WHERE old.balance != new.balance;`,
        language: 'sql',
      },
      {
        title: '3. 鎖與死鎖測試',
        content: `支付系統最怕死鎖導致交易超時。

**QA 測試場景：**
- **行鎖競爭**：多個請求同時更新同一行。
- **間隙鎖 (Gap Lock)**：範圍查詢時插入數據導致的鎖等待。
- **死鎖重現**：手動開啟兩個事務，按照特定順序操作數據行。`,
        codeExample: `-- 查看當前正在運行的事務與鎖
SHOW ENGINE INNODB STATUS;
SELECT * FROM information_schema.innodb_trx;`,
        language: 'sql',
      },
    ],

    codeExamples: [
      {
        title: '實戰：自動化數據驗證腳本 (Python + SQL)',
        code: `def verify_order_integrity(order_id):
    """
    全方位檢查一筆訂單在 DB 中的一致性
    1. 訂單表存在
    2. 狀態為 Success
    3. 流水表有對應記錄
    4. 用戶餘額已扣除
    """
    sql = f"""
    SELECT o.status, t.amount, u.balance
    FROM orders o
    JOIN transactions t ON o.id = t.order_id
    JOIN users u ON o.user_id = u.id
    WHERE o.id = '{order_id}'
    """
    result = db.query(sql)
    
    assert result['status'] == 'SUCCESS'
    assert result['amount'] > 0
    # ... 更多邏輯斷言`,
        language: 'python',
        explanation: '將複雜的 SQL 邏輯封裝在 Python 測試函數中，實現黑盒（API）與白盒（DB）的整合驗證。',
      },
    ],

    exercises: [
      {
        title: '任務 1: 使用 CTE 撰寫查詢',
        description: '撰寫一個使用 WITH 語句的 SQL，找出在過去 7 天內每天交易量排名前 3 的用戶。',
        difficulty: 'hard',
      },
      {
        title: '任務 2: 模擬數據不一致 Bug',
        description: '在測試資料庫中人為修改一筆流水金額，然後編寫一個對帳 SQL 成功將其找出。',
        difficulty: 'medium',
      },
    ],

    interviewTips: [
      {
        question: '如何保證金融系統數據的精度？',
        answer: '1) 資料庫端使用 DECIMAL 類型而非 FLOAT/DOUBLE；2) 應用程式端使用 Decimal 對象；3) 在每一層（前端、後端、資料庫）進行位數校驗；4) 測試時重點覆蓋 0.00000001 這類極小值的運算。',
        priority: 'high',
      },
      {
        question: '如果數據遷移後發現有 1% 的數據不一致，你會怎麼排查？',
        answer: '1) 找出特徵：這 1% 的數據是否有共同點（如特定幣種、特定時間、或是空值欄位）；2) 檢查腳本：審查遷移 SQL 邏輯，特別是類型轉換（Cast）部分；3) 驗證併發：遷移期間是否有新數據寫入導致髒讀。',
        priority: 'high',
      },
    ],

    resources: [
      {
        type: 'doc',
        title: 'Database Migration Testing Guide',
        url: 'https://www.guru99.com/data-migration-testing.html',
        description: '學習如何測試數據遷移',
      },
    ],

    prerequisites: ['Day 18: SQL 複雜查詢'],
    nextSteps: ['Day 21: Jenkins 持續集成與企業級 Pipeline'],
  },

  // ==================== DAY 20 ====================
  {
    id: 'day20',
    title: 'Day 20: Git 版本控制與 GitHub Actions 實戰',
    description: '掌握現代研發工作流中的 Git 高級操作，學習配置 GitHub Actions 實現自動化測試集成 (CI)',
    week: 3,
    day: 'Day 20',
    category: 'DevOps',
    icon: 'terminal',
    status: 'backlog',
    progress: 0,
    color: '#30D158',
    estimatedHours: 8,

    learningObjectives: [
      '✅ 掌握 Git 高級操作（Rebase, Stash, Cherry-pick, Amend）',
      '✅ 理解 Git Flow 與 GitHub Flow 分支管理策略',
      '✅ 掌握 Pull Request (PR) 流程與 Code Review 最佳實踐',
      '✅ 學會編寫 GitHub Actions 工作流文件 (.yml)',
      '✅ 掌握 Secrets 管理與環境變數注入',
      '✅ 實現測試失敗時的自動報警與 Artifacts 上傳',
    ],

    coreConcepts: [
      {
        term: 'Git Rebase',
        definition: '將一個分支的變更重新應用在另一個分支的頂端。相比 Merge，能產生更乾淨、線性的提交歷史。',
        example: 'git rebase main',
        importance: 'important',
      },
      {
        term: 'Continuous Integration (CI)',
        definition: '頻繁地將代碼集成到主幹。每次集成都通過自動化構建和測試來驗定，以儘早發現錯誤。',
        example: '每次 Push 代碼後，GitHub Actions 自動運行所有 pytest。',
        importance: 'critical',
      },
      {
        term: 'YAML Workflow',
        definition: 'GitHub Actions 的配置文件格式，定義了何時（Trigger）在什麼環境（Runner）執行哪些步驟（Steps）。',
        example: 'on: [push] \n jobs: test: ...',
        importance: 'critical',
      },
      {
        term: 'Secrets Management',
        definition: '安全地存儲 API Key、密碼等敏感信息，不在代碼庫中明文顯示。',
        example: '\${{ secrets.BINANCE_API_KEY }}',
        importance: 'critical',
      },
    ],

    knowledgePoints: [
      {
        title: '1. Git 高級實戰技巧',
        content: `作為 QA 工程師，你常需要切換不同功能分支進行測試。

**必備命令：**
- **git stash**: 暫存當前修改，切換分支後再恢復 (\`git stash pop\`)
- **git commit --amend**: 修改最後一次提交（如修復筆誤）。
- **git cherry-pick**: 將特定的一個提交應用到當前分支。
- **解決衝突 (Conflict)**：理解三方合併原理，熟練使用 VS Code 解決衝突。`,
        codeExample: `# 典型的 Rebase 工作流
git checkout feature/payment
git fetch origin
git rebase origin/main
# 解決衝突後
git add .
git rebase --continue
git push --force-with-lease # 由於修改了歷史，需要特殊 push`,
        language: 'bash',
      },
      {
        title: '2. GitHub Actions 工作流設計',
        content: `工作流文件位於 \`.github/workflows/\` 目錄。

**核心組件：**
- **on**: 觸發條件（push, pull_request, schedule）。
- **jobs**: 執行任務。
- **steps**: 具體步驟（checkout, setup-python, run tests）。`,
        codeExample: `name: QA Automation
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.9'
      - name: Install dependencies
        run: pip install -r requirements.txt
      - name: Run Tests
        env:
          API_KEY: \${{ secrets.API_KEY }}
        run: pytest --html=report.html
      - name: Upload Report
        if: always() # 確保測試失敗也會上傳報告
        uses: actions/upload-artifact@v3
        with:
          name: test-report
          path: report.html`,
        language: 'yaml',
      },
      {
        title: '3. 測試質量門禁 (Quality Gates)',
        content: `在 CI 中設置強制要求，確保只有通過測試的代碼才能合併。

**設置方法：**
- 在 GitHub Repo 設置中開啟 "Branch protection rules"。
- 要求 "Require status checks to pass before merging"。
- 關聯你的 GitHub Actions 工作流名稱。`,
        codeExample: `# 測試失敗自動通知 Slack (概念示例)
- name: Slack Notification
  if: failure()
  uses: rtCamp/action-slack-notify@v2
  env:
    SLACK_WEBHOOK: \${{ secrets.SLACK_WEBHOOK }}`,
        language: 'yaml',
      },
    ],

    codeExamples: [
      {
        title: '實戰：定時運行冒煙測試 (Cron Job)',
        code: `on:
  schedule:
    # 每天凌晨 0 點運行 (UTC)
    - cron: '0 0 * * *'
  workflow_dispatch: # 允許手動點擊按鈕執行`,
        language: 'yaml',
        explanation: '定時任務是自動化測試的常見需求，確保每天環境穩定。',
      },
    ],

    exercises: [
      {
        title: '任務 1: 創建並解決 Git 衝突',
        description: '在兩個不同分支修改同一個文件的同一行並合併，手動解決產生的衝突。',
        difficulty: 'medium',
      },
      {
        title: '任務 2: 部署第一個 GitHub Action',
        description: '在你的專案中創建 .github/workflows/main.yml，實現每次 Push 都打印 "Hello QA"。',
        difficulty: 'easy',
      },
    ],

    interviewTips: [
      {
        question: 'Git Merge 和 Rebase 的區別？',
        answer: 'Merge 會保留所有的提交歷史，並產生一個新的 Merge Commit，適合團隊合併大功能；Rebase 會重新編排提交歷史，使歷史呈現一條直線，更整潔，但會修改歷史，不建議在公共主幹分支上使用。',
        priority: 'high',
      },
      {
        question: 'CI/CD 如何幫助提升測試效率？',
        answer: '1) 及早發現錯誤：代碼提交即測試；2) 自動化：減少人工執行測試的時間；3) 環境一致性：在標準的 Docker 容器中運行，排除 "在我的電腦上是好的" 問題；4) 反饋快：開發者能立刻知道代碼是否破壞了現有功能。',
        priority: 'high',
      },
    ],

    resources: [
      {
        type: 'doc',
        title: 'GitHub Actions Documentation',
        url: 'https://docs.github.com/en/actions',
        description: '學習最強大的 CI 工具',
      },
    ],

    prerequisites: ['Day 19: 數據一致性驗證與效能調優'],
    nextSteps: ['Day 21: Jenkins 持續集成與企業級 Pipeline'],
  },

  // ==================== DAY 21 ====================
  {
    id: 'day21',
    title: 'Day 21: Jenkins 持續集成與企業級 Pipeline',
    description: '深入學習企業級 CI 工具 Jenkins，掌握聲明式流水線 (Declarative Pipeline)、Master-Slave 架構與自動化報告整合',
    week: 3,
    day: 'Day 21',
    category: 'DevOps',
    icon: 'settings_suggest',
    status: 'backlog',
    progress: 0,
    color: '#30D158',
    estimatedHours: 8,

    learningObjectives: [
      '✅ 理解 Jenkins Master-Agent 分散式架構',
      '✅ 掌握 Jenkinsfile 的基本語法（Declarative Pipeline）',
      '✅ 學會配置 Jenkins 插件（Allure, Git, Credentials）',
      '✅ 掌握參數化構建（Parameterized Build）與環境切換',
      '✅ 實現 GitHub Webhook 自動觸發 Jenkins 任務',
      '✅ 掌握在 Jenkins 中展示 Allure 測試報告與趨勢圖',
    ],

    coreConcepts: [
      {
        term: 'Pipeline as Code',
        definition: '將 CI/CD 流程定義在代碼庫中的 Jenkinsfile 中，實現流程的版本控制與自動化。',
        example: 'pipeline { agent any; stages { ... } }',
        importance: 'critical',
      },
      {
        term: 'Master-Agent Architecture',
        definition: 'Master 負責任務調度與 Web UI，Agent (Node) 負責具體的測試執行，實現資源水平擴展。',
        example: '在 Linux 節點跑 API 測試，在 Windows 節點跑 UI 測試。',
        importance: 'important',
      },
      {
        term: 'Jenkins Credentials',
        definition: '加密存儲帳號、密碼、SSH Key 等敏感信息，並安全地注入到 Pipeline 中。',
        example: 'withCredentials([string(credentialsId: "API_KEY", variable: "KEY")])',
        importance: 'critical',
      },
      {
        term: 'Webhook',
        definition: '由 GitHub 發起的 HTTP 通知，告知 Jenkins 有新的代碼 Push，從而觸發自動構建。',
        example: 'GitHub -> POST http://jenkins.com/github-webhook/',
        importance: 'important',
      },
    ],

    knowledgePoints: [
      {
        title: '1. 聲明式流水線 (Declarative Pipeline)',
        content: `這是 Jenkins 目前推薦的語法，結構清晰且易於維護。

**核心結構：**
- **pipeline**: 根節點。
- **agent**: 定義在哪個節點運行。
- **stages**: 包含多個階段（如 Build, Test, Deploy）。
- **post**: 定義執行後的動作（如發送報告、清理環境）。`,
        codeExample: `pipeline {
    agent any
    
    environment {
        API_URL = "https://api.test.com"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install') {
            steps {
                sh 'pip install -r requirements.txt'
            }
        }
        stage('Test') {
            steps {
                sh 'pytest --alluredir=reports/allure-results'
            }
        }
    }
    
    post {
        always {
            allure includeProperties: false, results: [[path: 'reports/allure-results']]
        }
    }
}`,
        language: 'groovy',
      },
      {
        title: '2. 參數化構建實戰',
        content: `QA 常需要手動觸發特定環境或特定幣種的測試。`,
        codeExample: `parameters {
    choice(name: 'ENV', choices: ['DEV', 'STAGING', 'PROD'], description: '選擇環境')
    string(name: 'SYMBOL', defaultValue: 'BTCUSDT', description: '測試幣種')
    booleanParam(name: 'RUN_SMOKE', defaultValue: true, description: '是否跑冒煙測試')
}

// 在階段中使用參數
stage('Run') {
    steps {
        sh "pytest -m \${params.RUN_SMOKE ? 'smoke' : 'regression'} --env=\${params.ENV}"
    }
}`,
        language: 'groovy',
      },
      {
        title: '3. Jenkins vs GitHub Actions',
        content: `作為高級 QA，需要根據專案規模選擇工具。

| 特性 | Jenkins | GitHub Actions |
|------|---------|----------------|
| **託管方式** | 自託管 (Self-hosted) | 雲端託管 (Cloud-native) |
| **自定義度** | 極高 (1800+ 插件) | 高 (GitHub Marketplace) |
| **上手難度** | 中 (需維護服務器) | 低 (配置 YAML 即用) |
| **費用** | 免費 (硬體成本) | 免費額度 + 超額付費 |
| **整合度** | 通用型 | 與 GitHub 深度整合 |`,
        language: 'text',
      },
    ],

    codeExamples: [
      {
        title: '實戰：帶日誌清理的 Pipeline',
        code: `post {
    success {
        echo '測試通過！準備發送 Slack 通知...'
    }
    failure {
        echo '測試失敗，請檢查日誌。'
    }
    always {
        cleanWs() // 執行完畢後清理工作空間
    }
}`,
        language: 'groovy',
        explanation: '清理工作空間是 Jenkins 維護的重要步驟，防止磁碟空間被日誌和報告佔滿。',
      },
    ],

    exercises: [
      {
        title: '任務 1: 寫一個 Jenkinsfile',
        description: '為你的 GitHub 專案寫一個包含 Build 和 Test 兩個階段的 Jenkinsfile，並在本地或 Docker 啟動 Jenkins 運行它。',
        difficulty: 'medium',
      },
      {
        title: '任務 2: 整合 Allure 報告',
        description: '在 Jenkins 中安裝 Allure 插件，並配置 Pipeline 自動生成並展示報告截圖。',
        difficulty: 'hard',
      },
    ],

    interviewTips: [
      {
        question: 'Jenkins 的 Master 和 Slave 是如何通訊的？',
        answer: '通常通過 SSH 或 JNLP。Master 負責向 Slave 發送具體的構建指令和代碼，Slave 執行完後將日誌 and 結果返回給 Master。這種架構能極大緩解 Master 的壓力。',
        priority: 'medium',
      },
      {
        question: '如何保證 Jenkins Pipeline 的安全性？',
        answer: '1) 使用 Credentials 管理敏感信息；2) 嚴格控制用戶權限 (Role-Based Strategy)；3) 避免在 Pipeline 中執行未經審核的 Shell 腳本；4) 確保 Jenkins 服務器不暴露在公網。',
        priority: 'high',
      },
    ],

    resources: [
      {
        type: 'doc',
        title: 'Jenkins Pipeline Documentation',
        url: 'https://www.jenkins.io/doc/book/pipeline/',
        description: '學習 Groovy 流水線語法',
      },
    ],

    prerequisites: ['Day 20: Git 基礎'],
    nextSteps: ['Day 22: Week 4 - 面試衝刺與 LeetCode 實戰'],
  },

  // ==================== DAY 22 ====================
  {
    id: 'day22',
    title: 'Day 22: LeetCode Python 實戰 (QA 必考題)',
    description: '針對 QA 面試中的編碼環節，精選 LeetCode 基礎與中級題目，練習字串處理、陣列操作及基本算法',
    week: 4,
    day: 'Day 22',
    category: 'Interview',
    icon: 'code',
    status: 'backlog',
    progress: 0,
    color: '#FF9F0A',
    estimatedHours: 8,

    learningObjectives: [
      '✅ 掌握字串處理核心題目（反轉、回文、無重複字元子串）',
      '✅ 熟練陣列與哈希表題目（兩數之和、移動零、有效括號）',
      '✅ 學會分析算法的時間複雜度（O(n)）與空間複雜度',
      '✅ 掌握 QA 面試中常見的排序與搜索基礎',
      '✅ 能夠在限時內寫出結構清晰、具備邊界檢查的代碼',
      '✅ 理解 Python 特性（切片、推導式）在算法中的妙用',
    ],

    coreConcepts: [
      {
        term: 'Time Complexity (O)',
        definition: '衡量算法運行時間隨輸入數據量增長的趨勢。QA 應追求 O(n) 或 O(n log n)，避免 O(n^2)。',
        example: '遍歷一次列表是 O(n)，嵌套循環是 O(n^2)。',
        importance: 'critical',
      },
      {
        term: 'Two Pointers (雙指針)',
        definition: '一種高效的算法技巧，使用兩個變量指向不同的位置（如頭尾），常用於字串或有序陣列。',
        example: '驗證回文字串、反轉陣列。',
        importance: 'important',
      },
      {
        term: 'Hash Table (哈希表)',
        definition: '使用鍵值對存儲數據，查詢速度為 O(1)。在算法中常用於空間換時間。',
        example: '使用字典存儲看過的數字來實現 "兩數之和"。',
        importance: 'critical',
      },
    ],

    knowledgePoints: [
      {
        title: '1. 字串處理 (Strings)',
        content: `QA 面試中最愛考字串處理，因為這與解析 API 數據息息相關。

**經典題目：**
- **Valid Palindrome**: 驗證回文。
- **Longest Common Prefix**: 最長公共前綴。
- **Reverse String**: 反轉字串。`,
        codeExample: `# 驗證回文 (使用 Python 切片技巧)
def is_palindrome(s):
    # 清理非字母數字字符
    clean_s = "".join(char.lower() for char in s if char.isalnum())
    return clean_s == clean_s[::-1]

print(is_palindrome("A man, a plan, a canal: Panama")) # True`,
        language: 'python',
      },
      {
        title: '2. 陣列與哈希表 (Arrays & Hashing)',
        content: `這類題目考查你對基礎數據結構的熟練度。

**經典題目：**
- **Two Sum**: 兩數之和。
- **Move Zeroes**: 移動零。
- **Valid Parentheses**: 有效括號。`,
        codeExample: `# Two Sum (使用 Hash Table 達成 O(n))
def two_sum(nums, target):
    prev_map = {} # val : index
    for i, n in enumerate(nums):
        diff = target - n
        if diff in prev_map:
            return [prev_map[diff], i]
        prev_map[n] = i
    return []`,
        language: 'python',
      },
      {
        title: '3. QA 編碼面試最佳實踐',
        content: `面試官不僅看結果，更看重你的思維過程。

**建議步驟：**
1. **澄清需求**：詢問輸入範圍、是否包含特殊字符、空值如何處理。
2. **寫出 Dummy 代碼**：先用最直觀的方法（哪怕效能不好）。
3. **考慮邊界情況**：空列表、單個元素、重複元素。
4. **優化代碼**：嘗試降低時間複雜度。`,
        codeExample: `# 檢查有效括號 (使用棧 Stack)
def is_valid_parentheses(s):
    stack = []
    mapping = {")": "(", "}": "{", "]": "["}
    for char in s:
        if char in mapping:
            top = stack.pop() if stack else '#'
            if mapping[char] != top:
                return False
        else:
            stack.append(char)
    return not stack`,
        language: 'python',
      },
    ],

    codeExamples: [
      {
        title: '實戰：反轉整數 (防止溢出)',
        code: `def reverse_integer(x):
    # QA 應注意邊界: 32-bit signed integer range
    MIN, MAX = -2147483648, 2147483647
    
    res = 0
    negative = x < 0
    x = abs(x)
    
    while x != 0:
        pop = x % 10
        x //= 10
        
        # 檢查是否溢出
        if res > MAX // 10 or (res == MAX // 10 and pop > 7):
            return 0
        res = res * 10 + pop
        
    return -res if negative else res`,
        language: 'python',
        explanation: '這題考查了對數字運算的理解以及對邊界值（溢出）的極度敏感，這是 QA 的核心素養。',
      },
    ],

    exercises: [
      {
        title: '任務 1: 完成 5 題 LeetCode Easy',
        description: '在 LeetCode 官網完成：1. Two Sum, 2. Valid Palindrome, 3. Reverse String, 4. Move Zeroes, 5. Valid Parentheses。',
        difficulty: 'medium',
      },
      {
        title: '任務 2: 分析複雜度',
        description: '為你寫出的 5 題代碼分別標註時間複雜度和空間複雜度。',
        difficulty: 'easy',
      },
    ],

    interviewTips: [
      {
        question: '如果面試時寫不出最優解怎麼辦？',
        answer: '不要停下來。先寫出一個暴力解法（Brute Force），並向面試官說明它的缺點。然後在寫完後嘗試分析如何用空間換時間（如使用哈希表）來優化它。溝通思路比最終答案更重要。',
        priority: 'high',
      },
      {
        question: 'QA 為什麼要考算法？',
        answer: '1) 邏輯思維能力；2) 代碼潔癖與規範；3) 對邊界條件的敏感度；4) 自動化測試本身也涉及複雜的邏輯處理和數據遍歷。',
        priority: 'medium',
      },
    ],

    resources: [
      {
        type: 'doc',
        title: 'LeetCode Python Patterns',
        url: 'https://neetcode.io/practice',
        description: '精選面試高頻題庫',
      },
    ],

    prerequisites: ['Day 1-2: Python 基礎'],
    nextSteps: ['Day 23: SQL 實戰面試題與數據邏輯'],
  },

  // ==================== DAY 23 ====================
  {
    id: 'day23',
    title: 'Day 23: SQL 實戰面試題與數據邏輯',
    description: '針對金融與支付系統的面試需求，精選 SQL 高頻考題，練習窗口函數、多表連接與複雜邏輯運算',
    week: 4,
    day: 'Day 23',
    category: 'Interview',
    icon: 'table_chart',
    status: 'backlog',
    progress: 0,
    color: '#FF9F0A',
    estimatedHours: 8,

    learningObjectives: [
      '✅ 掌握排名與 Top N 查詢（RANK, DENSE_RANK, Nth Highest Salary）',
      '✅ 熟練使用 CASE WHEN 進行數據轉換與分類統計',
      '✅ 掌握自連接（Self Join）解決員工與經理類型的題目',
      '✅ 學會處理日期函數與連續登錄、連續交易類題目',
      '✅ 掌握 SQL 中的數據分組與多重過濾（HAVING）',
      '✅ 能夠編寫用於檢測數據異常（重複、缺失）的 SQL',
    ],

    coreConcepts: [
      {
        term: 'Self Join',
        definition: '表與自身進行連接。常用於比較同一張表中的不同行。',
        example: 'SELECT e.name FROM Employee e JOIN Employee m ON e.manager_id = m.id',
        importance: 'critical',
      },
      {
        term: 'Rank Functions',
        definition: '用於分組排序的函數。RANK() 會跳過名次，DENSE_RANK() 不會跳過。',
        example: 'DENSE_RANK() OVER(ORDER BY score DESC)',
        importance: 'critical',
      },
      {
        term: 'COALESCE',
        definition: '返回參數列表中的第一個非空值。在處理 Outer Join 的空值時非常有用。',
        example: 'COALESCE(bonus, 0)',
        importance: 'important',
      },
    ],

    knowledgePoints: [
      {
        title: '1. 排名與 Top N 查詢',
        content: `金融系統中常需要獲取 "交易量前三名" 或 "第 N 高薪資"。

**關鍵語法：**
- **LIMIT n, m**: 跳過 n 條取 m 條（適合第 N 名）。
- **DENSE_RANK()**: 處理分數相同的情況。`,
        codeExample: `-- 獲取第 N 高薪資 (通用模板)
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  SET N = N - 1;
  RETURN (
      SELECT DISTINCT Salary FROM Employee 
      ORDER BY Salary DESC 
      LIMIT N, 1
  );
END`,
        language: 'sql',
      },
      {
        title: '2. 自連接 (Self Join) 實戰',
        content: `常用於階層結構或比較相鄰記錄。

**經典題：** Employees Earning More Than Their Managers。`,
        codeExample: `-- 找出薪資高於其經理的員工
SELECT e.Name as Employee
FROM Employee e
JOIN Employee m ON e.ManagerId = m.Id
WHERE e.Salary > m.Salary;`,
        language: 'sql',
      },
      {
        title: '3. 數據統計與 CASE WHEN',
        content: `將原始數據轉換為報表格式。`,
        codeExample: `-- 統計每個用戶的充值與提現總額 (一條 SQL 完成)
SELECT 
    user_id,
    SUM(CASE WHEN type = 'DEPOSIT' THEN amount ELSE 0 END) as total_deposit,
    SUM(CASE WHEN type = 'WITHDRAW' THEN amount ELSE 0 END) as total_withdraw
FROM transactions
GROUP BY user_id;`,
        language: 'sql',
      },
    ],

    codeExamples: [
      {
        title: '實戰：找出連續 3 次交易金額 > 100 的用戶',
        code: `-- 這是高級 SQL 題，考查窗口函數的綜合運用
SELECT DISTINCT user_id
FROM (
    SELECT user_id, amount,
           LAG(amount, 1) OVER(PARTITION BY user_id ORDER BY id) as prev1,
           LAG(amount, 2) OVER(PARTITION BY user_id ORDER BY id) as prev2
    FROM transactions
) t
WHERE amount > 100 AND prev1 > 100 AND prev2 > 100;`,
        language: 'sql',
        explanation: 'LAG 函數用於訪問前一行的數據，是處理 "連續" 類問題的神器。',
      },
    ],

    exercises: [
      {
        title: '任務 1: LeetCode SQL 5 題',
        description: '完成：1. Big Countries, 2. Duplicate Emails, 3. Customers Who Never Order, 4. Employees Earning More Than Managers, 5. Second Highest Salary。',
        difficulty: 'medium',
      },
      {
        title: '任務 2: 複雜對帳查詢',
        description: '撰寫一條 SQL，找出在 Order 表為 Success 但在 Transaction 表沒有紀錄的所有數據。',
        difficulty: 'medium',
      },
    ],

    interviewTips: [
      {
        question: '如何刪除資料庫中的重複記錄？',
        answer: '1) 使用 GROUP BY 和 MIN(id) 找出要保留的 ID；2) 使用 DELETE FROM table WHERE id NOT IN (上述 ID)；3) 在生產環境執行前必須先備份或在事務中執行。',
        priority: 'high',
      },
      {
        question: 'SQL 注入是什麼？如何防止？',
        answer: 'SQL 注入是通過在輸入框中插入惡意 SQL 語句來控制資料庫。防止方法：1) 使用參數化查詢（Prepared Statements）；2) 對輸入進行嚴格校驗；3) 使用 ORM 框架；4) 最小權限原則。',
        priority: 'high',
      },
    ],

    resources: [
      {
        type: 'doc',
        title: 'LeetCode SQL Study Plan',
        url: 'https://leetcode.com/study-plan/sql/',
        description: 'SQL 入門到進階題庫',
      },
    ],

    prerequisites: ['Day 18-19: SQL 基礎'],
    nextSteps: ['Day 24: API 測試場景與系統設計題'],
  },

  // ==================== DAY 24 ====================
  {
    id: 'day24',
    title: 'Day 24: API 測試場景題與系統設計 (QA 思維)',
    description: '掌握面試中最具挑戰性的 "如何測試 X" 場景題，學習從功能、性能、安全、異常等多維度拆解複雜系統',
    week: 4,
    day: 'Day 24',
    category: 'Interview',
    icon: 'architecture',
    status: 'backlog',
    progress: 0,
    color: '#FF9F0A',
    estimatedHours: 8,

    learningObjectives: [
      '✅ 掌握 "如何測試一個登入 API" 的標準回答框架',
      '✅ 學會設計複雜場景（如：秒殺系統、支付回調）的測試方案',
      '✅ 理解微服務架構下的整合測試與契約測試（Pact）',
      '✅ 掌握 API 限流（Rate Limiting）與熔斷機制的測試方法',
      '✅ 能夠從系統設計的角度評估測試自動化的切入點',
      '✅ 掌握斷點續傳、分片上傳等特殊技術場景的測試設計',
    ],

    coreConcepts: [
      {
        term: 'Exploratory Testing',
        definition: '一種強調測試者個人自由和責任的測試方法，在測試過程中不斷學習系統並動態設計用例。',
        example: '在測試登入時，嘗試各種奇怪的字符組合或中斷網絡。',
        importance: 'important',
      },
      {
        term: 'Contract Testing',
        definition: '驗證服務提供者（Provider）與消費者（Consumer）之間是否遵守約定的 API 契約。',
        example: '使用 Pact 工具驗證 Order 服務返回的欄位符合 Payment 服務的預期。',
        importance: 'important',
      },
      {
        term: 'Rate Limiting (限流)',
        definition: '限制客戶端在一定時間內能發起的請求次數。QA 需驗證 429 狀態碼與恢復機制。',
        example: '每分鐘限制 100 次請求。',
        importance: 'critical',
      },
      {
        term: 'Chaos Engineering (混沌工程)',
        definition: '通過在生產或測試環境主動注入故障（如延遲、服務掛掉），驗證系統的韌性。',
        example: '測試時隨機停掉一個資料庫節點。',
        importance: 'important',
      },
    ],

    knowledgePoints: [
      {
        title: '1. "如何測試 X" 的萬能公式',
        content: `面試官問 "如何測試 X" 時，不要只答功能。

**五維拆解法：**
1. **功能 (Functional)**：正常路徑、異常路徑、邊界值。
2. **性能 (Performance)**：響應時間、併發數、壓力極限。
3. **安全 (Security)**：越權訪問、SQL 注入、敏感數據洩漏。
4. **可靠性 (Reliability)**：超時重試、網路中斷、服務熔斷。
5. **易用性 (Usability/UX)**：錯誤提示是否友好、接口文檔是否清晰。`,
        codeExample: `# 案例：測試一個充值 API
# 功能：充值 100 USDT 成功
# 邊界：最小 0.01, 最大 10,000
# 安全：嘗試充值到別人的帳號（越權）
# 併發：快速點擊充值按鈕（冪等）
# 異常：餘額不足、支付通道維護中`,
        language: 'text',
      },
      {
        title: '2. 典型場景實戰：支付回調 (Webhook)',
        content: `這是支付 QA 的高頻題。

**測試要點：**
- **驗證簽名 (Signature)**：修改 Payload 看系統是否報錯。
- **冪等處理**：發送兩次相同的回調，餘額應只加一次。
- **超時重試**：模擬商家接收失敗，網關是否會按指數退避重發。
- **數據一致性**：回調內容中的金額、訂單號與內部記錄是否匹配。`,
        codeExample: `# 測試 Webhook 異常流程
def test_webhook_invalid_sign(api_client):
    payload = {"order_id": "123", "status": "PAID"}
    # 使用錯誤的簽名
    headers = {"X-Signature": "wrong_sign"}
    response = api_client.post("/webhooks/notify", json=payload, headers=headers)
    assert response.status_code == 401`,
        language: 'python',
      },
      {
        title: '3. 微服務系統設計題',
        content: `面試官可能會問：如果是微服務架構，你如何保證全局數據一致性？

**回答關鍵詞：**
- 分散式事務 (TCC, Sagas)。
- 異步最終一致性 (消息隊列 MQ)。
- 對帳系統 (Reconciliation)。
- 鏈路追蹤 (Zipkin/Jaeger) 輔助排查問題。`,
        codeExample: `// 契約測試示例 (Pact)
pact.given("User 123 exists")
    .uponReceiving("a request for user data")
    .path("/users/123")
    .method("GET")
    .willRespondWith(200, body);`,
        language: 'java',
      },
    ],

    codeExamples: [
      {
        title: '實戰：測試一個限流器 (Rate Limiter)',
        code: `def test_rate_limiter():
    # 限制 1 秒 5 次請求
    responses = []
    for _ in range(6):
        resp = requests.get(url)
        responses.append(resp.status_code)
    
    # 前 5 次 200，第 6 次 429
    assert responses[:5] == [200, 200, 200, 200, 200]
    assert responses[5] == 429`,
        language: 'python',
        explanation: '這是一個典型的非功能性測試場景，驗證系統的自我保護機制。',
      },
    ],

    exercises: [
      {
        title: '任務 1: 設計測試方案 (Search API)',
        description: '為一個具有分頁、關鍵字過濾、排序功能的搜索 API 設計完整測試案例，至少包含 15 個。',
        difficulty: 'medium',
      },
      {
        title: '任務 2: 模擬網絡延遲測試',
        description: '使用代理工具（如 Charles 或 Fiddler）設置響應延遲 10s，觀察你的測試框架是否能正確觸發超時機制。',
        difficulty: 'medium',
      },
    ],

    interviewTips: [
      {
        question: '如果 API 返回了 500 錯誤，你會如何定位問題？',
        answer: '1) 檢查響應體內容（是否有 StackTrace）；2) 查看後端服務日誌（Error Log）；3) 檢查數據庫狀態或慢查詢；4) 檢查鏈路監控（如 Jaeger）看是哪個微服務環節出錯；5) 檢查基礎設施（CPU/內存是否滿載）。',
        priority: 'high',
      },
      {
        question: '什麼是冪等性？為什麼在支付中很重要？',
        answer: '冪等性保證相同的操作執行多次結果相同。在支付中，網絡不穩定可能導致客戶端重發請求，如果沒有冪等性，會導致重複扣款。我們通過 Idempotency-Key 來解決這個問題。',
        priority: 'high',
      },
    ],

    resources: [
      {
        type: 'doc',
        title: 'How to Test APIs: A Comprehensive Guide',
        url: 'https://www.postman.com/api-platform/api-testing/',
        description: 'API 測試全方位指南',
      },
    ],

    prerequisites: ['Day 11: 支付系統測試深度實戰'],
    nextSteps: ['Day 25: QA 理論、測試策略與流程優化'],
  },

  // ==================== DAY 25 ====================
  {
    id: 'day25',
    title: 'Day 25: QA 理論、測試策略與流程優化',
    description: '從資深 QA 角度理解軟體測試生命週期（STLC），掌握風險評估、根因分析（RCA）與測試自動化策略的設計',
    week: 4,
    day: 'Day 25',
    category: 'Interview',
    icon: 'rule',
    status: 'backlog',
    progress: 0,
    color: '#FF9F0A',
    estimatedHours: 8,

    learningObjectives: [
      '✅ 深入理解測試金字塔（Testing Pyramid）及其在不同專案中的變體',
      '✅ 掌握測試策略（Test Strategy）與測試計畫（Test Plan）的區別與撰寫',
      '✅ 學會執行根因分析（RCA），使用 5 Whys 法定位問題',
      '✅ 理解測試左移（Shift Left）與測試右移（Shift Right）的實踐',
      '✅ 掌握 Bug 生命周期管理與嚴重程度（Severity）vs 優先級（Priority）的判定',
      '✅ 能夠設計高效的回歸測試（Regression）策略',
    ],

    coreConcepts: [
      {
        term: 'STLC (Software Testing Life Cycle)',
        definition: '包括需求分析、測試計畫、測試設計、環境搭建、測試執行與測試收尾六個階段。',
        example: '在需求評審階段就開始介入測試（測試左移）。',
        importance: 'critical',
      },
      {
        term: 'Root Cause Analysis (RCA)',
        definition: '一種結構化的問題解決方法，旨在找出導致 Bug 的根本原因而非僅修復表面現象。',
        example: '為什麼餘額不對？-> 代碼沒加鎖 -> 為什麼沒加鎖？-> 開發不知道併發場景 -> 為什麼不知道？-> 需求沒寫清。',
        importance: 'important',
      },
      {
        term: 'Shift Left Testing',
        definition: '將測試活動儘早移向開發生命週期的早期，如代碼評審、單元測試、需求分析。',
        example: 'QA 參與架構設計討論，提前指出潛在的數據一致性風險。',
        importance: 'critical',
      },
      {
        term: 'Regression Testing',
        definition: '在軟體修改後重新測試，以確保修改沒有引入新的錯誤或破壞現有功能。',
        example: '每次發布前跑一遍所有 P0 級別的自動化 API 測試。',
        importance: 'critical',
      },
    ],

    knowledgePoints: [
      {
        title: '1. 測試策略設計 (Test Strategy)',
        content: `一個好的測試策略應該回答：我們測什麼？怎麼測？什麼時候測？

**核心組成：**
- **範圍 (Scope)**：明確哪些功能測，哪些不測。
- **技術棧 (Tools)**：使用什麼框架（pytest, RestAssured, Allure）。
- **測試環境**：Dev, Staging, Sandbox, Production。
- **風險評估**：針對高價值、高風險模組（如支付）分配更多資源。
- **准入/准出標準**：什麼時候開始測？什麼時候算測完？`,
        codeExample: `# 測試策略模板片段
# 模組: 提現 (Withdrawal)
# 風險: 極高 (涉及資金流出)
# 策略: 
#   - 100% 接口自動化覆蓋
#   - 強制執行併發測試
#   - 需通過安全掃描`,
        language: 'text',
      },
      {
        title: '2. 嚴重程度 (Severity) vs 優先級 (Priority)',
        content: `這是 QA 面試最愛考的基礎題。

- **Severity**：Bug 對系統功能破壞的嚴重程度（技術維度）。
- **Priority**：修復 Bug 的緊急程度（業務維度）。

**案例：**
- **High Severity / Low Priority**：一個極少見的操作路徑會導致服務器崩潰，但正常用戶永遠碰不到。
- **Low Severity / High Priority**：公司 Logo 在首頁顯示錯誤，或者按鈕文字有錯別字（影響品牌形象）。`,
        codeExample: `| Bug 描述 | Severity | Priority | 理由 |
|----------|----------|----------|------|
| 支付扣款失敗 | Critical | P0 | 核心功能損壞 |
| Logo 顏色不對 | Trivial | P1 | 影響品牌 |
| 弱網路崩潰 | Major | P2 | 影響用戶體驗 |`,
        language: 'text',
      },
      {
        title: '3. 根因分析實戰 (5 Whys)',
        content: `當發生線上事故（Production Incident）時，QA 需帶領團隊做 RCA。

**步驟：**
1. 發生了什麼？（線上餘額計算錯誤）
2. 為什麼？（資料庫出現了重複入帳）
3. 為什麼？（API 請求被發送了兩次）
4. 為什麼？（前端沒做防抖且後端沒做冪等）
5. 為什麼？（開發和 QA 都忽略了極端併發場景的測試）
**結論：** 完善冪等性框架，並將併發測試納入 CI 流程。`,
        codeExample: `# RCA 報告核心
# 根本原因: 缺少分佈式鎖保護
# 預防措施: 
#   1. 全局 API 引入 Idempotency-Key
#   2. 增加線程池併發測試案例`,
        language: 'text',
      },
    ],

    codeExamples: [
      {
        title: '實戰：設計測試計畫 (Test Plan)',
        code: `1. 測試目標: 驗證 Binance Pay V2.0 上線質量
2. 資源分配: 2 名 QA, 1 台 Jenkins 執行機
3. 測試範圍: 
   - 掃碼支付 (Manual + Auto)
   - 跨境匯率換算 (Auto)
   - 商家退款接口 (Auto)
4. 准出標準:
   - 100% P0/P1 用例通過
   - 無未修復的 Critical/Major Bug
   - 代碼覆蓋率 > 85%`,
        language: 'text',
        explanation: '這是一個精簡版的測試計畫，面試時能有條理地列出這些要點會顯得很專業。',
      },
    ],

    exercises: [
      {
        title: '任務 1: 線上事故 RCA',
        description: '模擬一個場景：用戶在雙 11 活動中領到了雙倍積分。請使用 5 Whys 分析根本原因並給出預防方案。',
        difficulty: 'medium',
      },
      {
        title: '任務 2: 等價類與邊界值劃分',
        description: '針對 "用戶密碼設置" 功能（要求：8-16位，含大小寫字母和數字），設計一組等價類劃分表。',
        difficulty: 'easy',
      },
    ],

    interviewTips: [
      {
        question: '如果開發說 "這不是一個 Bug"，你會怎麼辦？',
        answer: '1) 重新核對需求文檔（PRD）；2) 站在用戶角度評估影響；3) 在測試環境演示該問題；4) 如果仍有分歧，找 PM 仲裁。重點在於溝通而非爭吵。',
        priority: 'high',
      },
      {
        question: '什麼是 Ad-hoc Testing？',
        answer: '即興測試。沒有正式的測試用例和文檔，基於測試者的經驗和直覺隨機測試系統。通常在正式測試結束後進行，用於發現那些被常規用例遺漏的邊角問題。',
        priority: 'medium',
      },
    ],

    resources: [
      {
        type: 'doc',
        title: 'ISTQB Foundation Level Syllabus',
        url: 'https://www.istqb.org/',
        description: '國際軟體測試認證官方文檔',
      },
    ],

    prerequisites: ['Day 1: QA 理論基礎'],
    nextSteps: ['Day 26: 安全測試、OWASP Top 10 與專案優化'],
  },

  // ==================== DAY 26 ====================
  {
    id: 'day26',
    title: 'Day 26: 安全測試、OWASP Top 10 與專案優化',
    description: '學習 Web 與 API 安全測試的基礎知識，掌握 OWASP Top 10 核心風險及 QA 如何在日常工作中發現安全隱患',
    week: 4,
    day: 'Day 26',
    category: 'Testing',
    icon: 'security',
    status: 'backlog',
    progress: 0,
    color: '#FF9F0A',
    estimatedHours: 8,

    learningObjectives: [
      '✅ 理解 OWASP Top 10（2025版）的核心安全風險',
      '✅ 掌握 IDOR（不安全的直接對象引用）的測試方法',
      '✅ 學會識別常見的 API 認證與授權漏洞（如 JWT 偽造）',
      '✅ 掌握基礎的 SQL 注入與 XSS 攻擊的防禦性測試',
      '✅ 能夠在 API 測試中發現敏感數據洩漏（Sensitive Data Exposure）',
      '✅ 掌握使用安全掃描工具（如 OWASP ZAP）的基礎概念',
    ],

    coreConcepts: [
      {
        term: 'IDOR (Insecure Direct Object Reference)',
        definition: '當程序根據用戶提供的輸入直接訪問對象（如資料庫記錄、文件）而未進行權限驗證時發生的漏洞。',
        example: '修改 URL 中的 id=123 為 id=124 就能看到別人的訂單。',
        importance: 'critical',
      },
      {
        term: 'Injection',
        definition: '將惡意代碼注入到輸入欄位，導致後端資料庫或系統執行非預期指令。包括 SQL、NoSQL、OS 命令注入。',
        example: '在登入框輸入 " OR 1=1 --',
        importance: 'critical',
      },
      {
        term: 'JWT (JSON Web Token)',
        definition: 'API 常用的認證令牌。安全性依賴於正確的簽名驗證。QA 應測試 Header 被修改為 "alg": "none" 的情況。',
        example: '修改 JWT 內容嘗試偽造用戶身份。',
        importance: 'important',
      },
      {
        term: 'Rate Limiting (安全維度)',
        definition: '防止暴力破解（Brute Force）和 DDoS 攻擊。',
        example: '測試同一 IP 連續 100 次錯誤登入後是否被封禁。',
        importance: 'important',
      },
    ],

    knowledgePoints: [
      {
        title: '1. OWASP Top 10 核心解析 (QA 版)',
        content: `QA 不一定要像黑客一樣攻擊，但必須知道哪裡最容易出問題。

**核心關注點：**
- **Broken Access Control (權限繞過)**：最常見。測試普通用戶能否訪問管理員 API。
- **Cryptographic Failures (加密失效)**：如 HTTP 未加密、明文傳輸密碼。
- **Injection (注入)**：所有輸入框、Header、Cookie 都是注入點。
- **Sensitive Data Exposure**：響應體中是否返回了用戶的完整卡號、手機號或身份證號。`,
        codeExample: `# 安全測試用例：IDOR 驗證
def test_get_order_idor(auth_client_user_a):
    # 用戶 A 的 Token 嘗試訪問用戶 B 的訂單
    order_id_b = "order_user_b_999"
    response = auth_client_user_a.get(f"/api/v1/orders/{order_id_b}")
    
    # 預期：應返回 403 Forbidden 或 404 Not Found
    # 錯誤：如果返回 200 並顯示訂單細節，說明有 IDOR 漏洞
    assert response.status_code in [403, 404]`,
        language: 'python',
      },
      {
        title: '2. API 安全測試最佳實踐',
        content: `
- **越權測試 (Authorization)**：水平越權（看同級數據）、垂直越權（看上級權限）。
- **重放攻擊 (Replay Attack)**：攔截一筆成功的支付請求並原樣重發，驗證系統是否有 nonce 或時戳校驗。
- **輸入清洗**：在 Payload 中輸入 <script>alert(1)</script>，檢查響應是否正確轉義。`,
        codeExample: `# SQL 注入嘗試
payload = {"username": "admin' --", "password": "any"}
# 觀察後端是否因拼接 SQL 導致繞過密碼校驗`,
        language: 'text',
      },
      {
        title: '3. 敏感數據保護',
        content: `在幣安這樣的金融場景，數據脫敏（Masking）至關重要。

**驗證標準：**
- 響應體中的手機號應顯示為：138****5678。
- 密碼絕對不能出現在日誌（Log）或響應體中。
- 銀行卡號應僅保留後四位。`,
        codeExample: `def test_response_masking(api_client):
    response = api_client.get("/api/v1/profile")
    data = response.json()
    
    # 驗證手機號已脫敏
    assert "****" in data["phone"]
    # 驗證響應中不含 password 欄位
    assert "password" not in data`,
        language: 'python',
      },
    ],

    codeExamples: [
      {
        title: '實戰：測試 JWT None Algorithm 漏洞',
        code: `import jwt

def test_jwt_none_algorithm():
    # 1. 正常的 Token
    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    
    # 2. 偽造一個 alg 為 None 的 Token (常見安全漏洞)
    # Header: {"alg": "none"}
    # Payload: {"user_id": 1}
    malicious_token = "eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJ1c2VyX2lkIjoxfQ."
    
    response = requests.get(url, headers={"Authorization": f"Bearer {malicious_token}"})
    
    # 預期：後端應拒絕此 Token
    assert response.status_code == 401`,
        language: 'python',
        explanation: '這是一個高級 API 安全測試場景，驗證後端是否強制要求強大的加密算法。',
      },
    ],

    exercises: [
      {
        title: '任務 1: IDOR 測試方案設計',
        description: '為 "個人頭像上傳與查看" 功能設計一組安全測試案例，重點關注權限驗證。',
        difficulty: 'medium',
      },
      {
        title: '任務 2: 敏感日誌排查',
        description: '檢查你的自動化測試日誌（Logs），確保沒有打印任何 Authorization Token 或 API Key。',
        difficulty: 'easy',
      },
    ],

    interviewTips: [
      {
        question: '什麼是水平越權和垂直越權？',
        answer: '水平越權是訪問與自己同級別權限的數據（如看別人的訂單）；垂直越權是普通用戶獲得了高權限用戶的操作能力（如普通用戶刪除其他用戶）。',
        priority: 'high',
      },
      {
        question: 'QA 如何在自動化測試中整合安全掃描？',
        answer: '可以通過將自動化測試的流量代理到 OWASP ZAP 或 Burp Suite 中，利用這些工具的被動掃描（Passive Scan）功能自動發現潛在的 XSS、敏感信息洩漏等問題。',
        priority: 'medium',
      },
    ],

    resources: [
      {
        type: 'doc',
        title: 'OWASP Top 10 Project',
        url: 'https://owasp.org/www-project-top-ten/',
        description: '全球最權威的 Web 安全風險榜單',
      },
    ],

    prerequisites: ['Day 4: HTTP 基礎'],
    nextSteps: ['Day 27: 行為面試與專案經驗總結'],
  },

  // ==================== DAY 27 ====================
  {
    id: 'day27',
    title: 'Day 27: 行為面試與專案經驗 (STAR 方法)',
    description: '掌握行為面試（Behavioral Interview）的回答技巧，學習如何使用 STAR 法則量化專案成果，並準備高頻 QA 職位故事',
    week: 4,
    day: 'Day 27',
    category: 'Interview',
    icon: 'record_voice_over',
    status: 'backlog',
    progress: 0,
    color: '#FF9F0A',
    estimatedHours: 8,

    learningObjectives: [
      '✅ 掌握 STAR 方法（Situation, Task, Action, Result）構建回答',
      '✅ 能夠量化專案成果（如：提升覆蓋率 %、減少測試耗時 %）',
      '✅ 準備 3 個核心專案故事（挑戰、解決衝突、創新）',
      '✅ 學會回答 "為什麼選擇幣安" 及 "你的優缺點"',
      '✅ 掌握與開發、產品經理溝通衝突的處理技巧',
      '✅ 理解幣安的企業文化（用戶至上、硬核、自由度）',
    ],

    coreConcepts: [
      {
        term: 'STAR Method',
        definition: '回答行為面試題的黃金標準：Situation（背景）、Task（任務）、Action（你的具體行動）、Result（最終量化結果）。',
        example: 'S: 支付接口不穩定；T: 建立自動化監控；A: 使用 Python 編寫腳本並接入 CI；R: Bug 發現時間提前 50%。',
        importance: 'critical',
      },
      {
        term: 'Quantification (量化)',
        definition: '使用數字來證明你的價值。QA 應關注：Bug 數量、測試時間、自動化比例、漏測率。',
        example: '"我發現了 50 個 Bug" vs "我發現了 3 個可能導致資金損失的 Critical Bug"。',
        importance: 'critical',
      },
      {
        term: 'Conflict Management',
        definition: '面試官常問 "當你與開發意見不一致時怎麼辦"。核心在於數據驅動、用戶視角與團隊合作。',
        example: '通過數據證明 Bug 的觸發機率，而非爭吵。',
        importance: 'important',
      },
    ],

    knowledgePoints: [
      {
        title: '1. STAR 方法深度實戰',
        content: `好的回答應該是 10% S, 10% T, 60% A, 20% R。

**故事 1：解決了一個困難的技術問題**
- **S**: 支付系統在壓測時出現偶發性數據不一致。
- **T**: 需要定位是網路問題還是代碼併發漏洞。
- **A**: 我使用線程池模擬高併發，同時分析資料庫死鎖日誌，最終鎖定了樂觀鎖失效的問題。
- **R**: 修復後，壓測 10 萬次請求無一例出錯，避免了潛在的資金風險。`,
        codeExample: `# 量化成果參考
# 1. 測試效率提升: 2 小時 -> 10 分鐘
# 2. 自動化覆蓋率: 30% -> 85%
# 3. 線上 Bug 減少: 去年 10 個 -> 今年 2 個`,
        language: 'text',
      },
      {
        title: '2. 常見行為面試題 (Behavioral Questions)',
        content: `
- **為什麼想來幣安？** (結合對 Crypto 的熱情、技術挑戰、團隊規模)。
- **你的最大缺點是什麼？** (說一個真實但可控的缺點，並展示你如何改進它)。
- **描述一次你失敗的經歷**。 (重點在於你從中學到了什麼，以及如何避免再次發生)。
- **如果項目進度趕不上，你會怎麼辦？** (評估風險、劃分優先級、溝通預期)。`,
        codeExample: `// 關於幣安文化的思考
Binance values: 
- User-Focused (用戶至上)
- Hardcore (硬核/極致執行)
- Freedom (自由與責任)`,
        language: 'text',
      },
      {
        title: '3. 專案總結與提煉',
        content: `將你過去的專案按照 "支付、自動化、性能、流程" 四個標籤進行分類。

**提煉要點：**
- **技術棧**：用了什麼？（Python, Pytest, Jenkins, Docker）。
- **你的角色**：你是主導者還是執行者？
- **最亮點**：你做的哪件事是別人替代不了的？`,
        codeExample: `# 準備提問面試官的問題:
1. 您對這個職位的候選人最看重的特質是什麼？
2. 團隊目前面臨最大的技術挑戰是什麼？
3. 團隊的自動化測試比例和發布流程是怎樣的？`,
        language: 'text',
      },
    ],

    codeExamples: [
      {
        title: '實戰：撰寫自我介紹 (QA 版)',
        code: `你好，我是 [姓名]。我有 [數字] 年 QA 經驗，專注於 API 自動化與支付系統測試。
在上一份工作中，我主導搭建了基於 Python 的測試框架，將回歸測試時間縮短了 60%。
我對處理高併發下的數據一致性問題有深厚興趣，這也是我想加入幣安的原因...`,
        language: 'text',
        explanation: '自我介紹要簡潔（2分鐘內），突出與職位高度相關的關鍵點。',
      },
    ],

    exercises: [
      {
        title: '任務 1: 寫出你的 3 個 STAR 故事',
        description: '分別針對 "技術突破"、"團隊協作"、"重大失誤" 寫出 300 字左右的 STAR 回答。',
        difficulty: 'medium',
      },
      {
        title: '任務 2: 模擬面試對話',
        description: '找朋友或使用 AI 助手，模擬回答 "為什麼我們應該錄用你？" 這個問題。',
        difficulty: 'easy',
      },
    ],

    interviewTips: [
      {
        question: '如何應對面試中的壓力測試？',
        answer: '保持冷靜，不急於回答。可以先確認問題："您的意思是不是..."。如果真的不會，誠實告知並分享你嘗試解決問題的思路，這比胡編亂造好得多。',
        priority: 'high',
      },
      {
        question: '關於 "加班" 和 "遠端工作" 的態度？',
        answer: '幣安是遠端工作文化，但對結果要求極高。展示你的自我管理能力、對異步溝通工具的熟悉度，以及對目標導向（Result-oriented）文化的認可。',
        priority: 'medium',
      },
    ],

    resources: [
      {
        type: 'article',
        title: 'The STAR Method for QA Interviews',
        url: 'https://www.testingexcellence.com/star-method-software-testing-interviews/',
        description: '專為測試工程師準備的 STAR 指南',
      },
    ],

    prerequisites: ['Day 1-26 的所有技術內容'],
    nextSteps: ['Day 28: Mock 面試、總複習與衝刺提交'],
  },

  // ==================== DAY 28 ====================
  {
    id: 'day28',
    title: 'Day 28: Mock 面試、總複習與衝刺提交',
    description: '進行最後的全真模擬面試，複習 Week 1-4 的所有技術要點，完成個人學習成果總結並準備正式應聘',
    week: 4,
    day: 'Day 28',
    category: 'Interview',
    icon: 'verified',
    status: 'backlog',
    progress: 0,
    color: '#FF9F0A',
    estimatedHours: 8,

    learningObjectives: [
      '✅ 通過一輪完整的全真模擬面試（技術 + 行為）',
      '✅ 快速回顧 Python、Java、SQL、API、支付系統的所有高頻考點',
      '✅ 整理個人測試框架專案 GitHub，確保代碼整潔、文檔齊全',
      '✅ 掌握面試後的感謝信撰寫與後續跟進技巧',
      '✅ 完成所有學習進度追蹤，確認 100% 達成學習目標',
      '✅ 建立應對大廠面試的心態與自信',
    ],

    coreConcepts: [
      {
        term: 'Mock Interview (模擬面試)',
        definition: '高度還原真實面試環境的練習，旨在發現知識盲區、克服緊張情緒並優化表達。',
        example: '找同行或 AI 進行一對一技術深挖。',
        importance: 'critical',
      },
      {
        term: 'Portfolio (專案作品集)',
        definition: 'QA 的作品集通常是 GitHub 上的自動化測試框架。必須包含 README、CI 配置與詳細的註釋。',
        example: '一個包含 Python/Pytest + Allure + GitHub Actions 的完整支付測試專案。',
        importance: 'critical',
      },
      {
        term: 'Self-Correction',
        definition: '基於模擬面試的反饋，針對弱項進行最後 24 小時的精確打擊（衝刺）。',
        example: '如果發現 SQL 窗口函數不熟，立即重刷相關題目。',
        importance: 'important',
      },
    ],

    knowledgePoints: [
      {
        title: '1. 面試前最後的 Checklist',
        content: `出發（或連線）前請確保：
- **環境檢查**：如果是遠端面試，測試麥克風、攝像頭、穩定的網路。
- **簡歷複習**：確保簡歷上的每一個字你都能解釋清楚。
- **代碼環境**：準備好 IDE，隨時可能進行 Live Coding。
- **自我介紹**：練習 1 分鐘、2 分鐘、5 分鐘三個版本。`,
        codeExample: `# 最後複習的技術關鍵詞：
# - Idempotency & Concurrency (支付)
# - Testing Pyramid & Shift Left (理論)
# - JOINs & Window Functions (SQL)
# - Pytest Fixtures & Mocks (自動化)`,
        language: 'text',
      },
      {
        title: '2. 高頻技術問題衝刺池',
        content: `
- **Python**: 什麼是裝飾器？什麼是 GIL？
- **API**: HTTP 2.0 與 1.1 的區別？什麼是 Restful？
- **支付**: 如何保證充值系統不掉單？
- **DB**: 什麼是幻讀（Phantom Read）？如何解決？
- **框架**: 如何在自動化中處理失敗截圖與日誌？`,
        codeExample: `// 快速記憶代碼片段: 支付狀態機檢查
if (!validTransitions.get(currentStatus).contains(targetStatus)) {
    throw new IllegalStatusException("Invalid state change!");
}`,
        language: 'java',
      },
      {
        title: '3. 職業規劃與 SDET 發展',
        content: `面試最後常問 "你的職業規劃是什麼？"

**建議回答：**
- **短期**：在幣安這樣的頂尖交易所深度磨練支付與大數據測試技術。
- **中期**：推動團隊測試流程優化，實現極致的 CI/CD 與質量門禁。
- **長期**：成為一名卓越的 SDET（測試開發工程師），通過研發工具提升全團隊的效率。`,
        codeExample: `# 幣安應聘宣言：
# "我不僅是 Bug 的發現者，更是系統穩定性的守護者與研發效率的推動者。"`,
        language: 'text',
      },
    ],

    codeExamples: [
      {
        title: '實戰：面試後的感謝信模板 (中英雙語)',
        code: `Dear [Interviewer Name],
Thank you for the opportunity to interview for the QA Engineer position today.
I really enjoyed our discussion about [Topic, e.g., the payment system's idempotency].
I am very excited about the possibility of joining the Binance team...`,
        language: 'text',
        explanation: '面試後 24 小時內發送感謝信能展現你的職業素養和對職位的重視。',
      },
    ],

    exercises: [
      {
        title: '任務 1: 完成一次全真模擬面試',
        description: '設定 60 分鐘鬧鐘，找人提問並錄音，回聽自己的回答是否邏輯清晰。',
        difficulty: 'hard',
      },
      {
        title: '任務 2: 整理 GitHub README',
        description: '為你的學習專案寫一份精美的 README，包含專案架構圖、如何運行測試、技術棧介紹。',
        difficulty: 'medium',
      },
    ],

    interviewTips: [
      {
        question: '面試快結束時，你有什麼想問我們的嗎？',
        answer: '不要說 "沒有"。這是一個展示你對公司興趣的好機會。問：1) 團隊對這份職位最大的期待是什麼？2) 幣安在技術出海過程中遇到過哪些有趣的挑戰？3) 團隊內部的代碼評審流程是怎樣的？',
        priority: 'high',
      },
      {
        question: '如果同時收到多個 Offer，你如何選擇？',
        answer: '強調你選擇 Offer 的標準：1) 技術挑戰與成長空間；2) 團隊文化與核心價值觀；3) 行業前景。表達對幣安在加密領域領導地位的高度認可。',
        priority: 'medium',
      },
    ],

    resources: [
      {
        type: 'practice',
        title: 'Binance Careers - Last Check',
        url: 'https://www.binance.com/zh-TC/careers',
        description: '再次確認職位要求，做到知己知彼',
      },
    ],

    prerequisites: ['完成 28 天所有課程'],
    nextSteps: ['正式提交簡歷，祝你順利錄取！🎉'],
  },
];

export const getCategoryColor = (category: string): string => {
  const colors: { [key: string]: string } = {
    'Python 基礎': '#0A84FF',
    'API Testing': '#30D158',
    'Testing': '#FF9F0A',
    'Payment': '#30D158',
    'Java': '#FF453A',
    'Database': '#5E5CE6',
    'DevOps': '#30D158',
    'Interview': '#FF9F0A',
    'Project': '#0A84FF'
  };
  return colors[category] || '#8E8E93';
};
