# CS0502 · Foundations of Artificial Intelligence / 人工智能基础

## 中文

这是个人项目。每位同学从项目 A、B、C 中选择一个独立完成；不设自选题。项目应使用 AI coding agent 完成，但你需要自行设计提示词、技术方案、测试和迭代过程。本资料不提供完整提示词或参考实现。

### 项目 A：零售客户分群与洞察

使用教师提供的 Online Retail 交易数据，完成 Python + HTML 小应用。按客户构建 RFM 特征（最近购买时间、购买频率、消费金额），使用 K-Means 分群，并在网页中展示群体规模、RFM 特征与客户/群体分布。

基础要求：

1. 清洗交易数据，按客户构建 RFM 特征，完成 K-Means 客户分群；
2. 为每个群体写出基于数据的简短画像和一条业务建议；
3. 比较一种不同设置，例如不同 K 值、是否标准化或不同清洗规则，并解释结果差异。

加分：比较多个 K 值并说明选择依据；加入筛选、详情面板、图表导出、自动洞察或合理聚类对照分析。

### 项目 B：手机活动识别——MLP 与一维 CNN 的比较

使用教师提供的 UCI HAR 数据，完成 Python + HTML 活动识别器。必须同时实现：以 561 维整理特征为输入的 MLP，以及以 `128 × 9` 原始传感器时间序列为输入的一维 CNN。网页展示测试样本曲线、真实活动、两个模型的预测与置信度。

基础要求：

1. 用教师给定的训练集和测试集分别训练 MLP 与一维 CNN；
2. 在相同测试集上比较准确率、混淆矩阵和一组容易混淆的活动；
3. 分析一组容易混淆的活动，解释两种模型方法各自的优缺点。

加分：比较两种以上网络配置，分析参数量、训练时间、准确率或混淆变化；增加错误样本可视化、类别筛选、错误样本库或导出结果。

### 项目 C：微型语言模型的通知结构化

使用教师提供的 CampusNotice-ActionCard 数据集和 MiniMind-3（64M）基础权重，完成 Python + HTML 小应用。对已有基础权重做小规模 SFT；输入中文校园通知，输出 JSON 行动卡片：事件类型、活动名称、开始时间、地点、面向对象、截止时间、是否需要报名、学生行动。原文未出现的信息必须为 `null` 或空数组，不能猜测。

基础要求：

1. 使用教师提供的数据完成 MiniMind-3 的小规模 SFT；
2. 在测试集上比较微调前后输出，展示 JSON 合法率、字段正确情况和一类错误案例；
3. 分析模型在哪些通知类型上表现较好或较差，并展示错误案例。

加分：测试多时间、无需报名、延期、取消或信息缺失等困难通知；比较训练轮数、数据量或输出模板，或优化 JSON 差异、空字段、下载与错误提示界面。

### 共同提交内容

1. 包含完整 HTML、Python 与其他源代码的完整项目文件夹或 ZIP，以及 README；
2. 可执行 App；
3. 项目录屏，展示程序实际运行与主要结果；
4. 图文项目报告：说明数据、方法、结果、AI agent 迭代过程、问题、局限性或失败案例。

## English

This is an individual project. Choose exactly one independent project—A, B, or C; there is no open topic. Use an AI coding agent, but design your own prompts, technical approach, testing, and iteration process. This material provides no complete prompt or reference implementation.

### Project A: Retail Customer Segmentation and Insights

Use the instructor-provided Online Retail transaction data to build a Python + HTML app. Construct customer RFM features (recency, frequency, monetary value), cluster customers with K-Means, and show segment size, RFM comparison, and customer/segment distributions.

Core: clean transactions and construct RFM features; perform K-Means clustering; write a data-grounded profile plus one business suggestion per segment; compare one changed setting such as K, standardization, or cleaning rules.

Bonus: compare several K values with a justified choice; add filtering, detail panels, chart export, automatic insight summaries, or another sensible clustering comparison.

### Project B: Smartphone Activity Recognition — MLP vs. 1D CNN

Use the instructor-provided UCI HAR data to build a Python + HTML activity recognizer. Implement both an MLP using the prepared 561-dimensional features and a 1D CNN using raw `128 × 9` sensor time series. The page should show test-sample curves, ground truth, both predictions, and confidence.

Core: train both models on the provided train/test split; compare accuracy, confusion matrices, and one easily confused activity pair; explain the strengths and limits of the two model approaches.

Bonus: compare two or more network configurations and analyze parameters, training time, accuracy, or confusion; add error-sample visualization, class filtering, an error library, or result export.

### Project C: Mini Language Model for Notice Structuring

Use the instructor-provided CampusNotice-ActionCard data and MiniMind-3 (64M) base weights to build a Python + HTML app. Perform small-scale SFT on the existing base model. A Chinese campus notice should produce a JSON action card with event type, activity name, start time, location, audience, deadline, registration requirement, and student action. Missing information must be `null` or an empty array—never guessed.

Core: fine-tune MiniMind-3 with the provided data; compare baseline and fine-tuned output on the test set using JSON validity, field correctness, and one error class; analyze where the model performs well or poorly.

Bonus: test difficult notices such as multiple times, no registration, delay, cancellation, or missing information; compare epochs, data volume, or output templates, or improve JSON differences, empty-field display, download, and error messages.

### Common submission requirements

1. A complete project folder or ZIP with all HTML, Python, and other source code, plus a README;
2. A runnable app;
3. A project recording showing the app running and its main results;
4. An illustrated report explaining data, method, results, AI-agent iteration, problems, and a limitation or failure case.
