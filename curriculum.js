// ===== CURRICULUM DATA =====
const CURRICULUM = {
  statistics: {
    id: 'statistics',
    title: 'الإحصاء وتحليل البيانات',
    titleEn: 'Statistics & Data Analysis',
    icon: '📊',
    color: '#6C63FF',
    description: 'الإحصاء هو علم جمع البيانات وتحليلها واستخلاص النتائج منها - هو لغة علوم الآلة!',
    chapters: [
      {
        id: 'ch1',
        title: 'مقدمة في الإحصاء وعلوم الآلة',
        pages: '1-15',
        icon: '🎯',
        lessons: [
          {
            id: 'intro-stats',
            title: 'ما هو الإحصاء؟ ولماذا نتعلمه؟',
            type: 'concept',
            content: {
              definition: 'الإحصاء هو علم جمع البيانات، تنظيمها، تحليلها وتفسيرها لاتخاذ قرارات ذكية',
              whyLearn: [
                '🤖 علوم الآلة تعتمد على الإحصاء 100%',
                '📈 كل خوارزمية AI تستخدم مفاهيم إحصائية',
                '💡 يساعدك على فهم البيانات قبل بناء النماذج',
                '🎯 يرفع دقة توقعاتك وقراراتك'
              ],
              realExamples: [
                { title: 'Netflix', desc: 'يستخدم الإحصاء لاقتراح أفلام تناسب ذوقك', icon: '🎬' },
                { title: 'Google Maps', desc: 'يحلل بيانات الملايين لحساب وقت الوصول', icon: '🗺️' },
                { title: 'طبيب AI', desc: 'يشخص الأمراض بدقة 95% باستخدام الإحصاء', icon: '🏥' },
                { title: 'Amazon', desc: 'يتوقع ما ستشتريه قبل أن تفكر فيه!', icon: '🛒' }
              ],
              mindMap: {
                center: 'الإحصاء',
                branches: [
                  { label: 'وصفي', children: ['المتوسط', 'الوسيط', 'الانحراف'] },
                  { label: 'استنتاجي', children: ['الفرضيات', 'الثقة', 'التنبؤ'] },
                  { label: 'الاحتمال', children: ['التوزيعات', 'الأحداث', 'القاعدة'] },
                  { label: 'الانحدار', children: ['الخطي', 'اللوجستي', 'المتعدد'] }
                ]
              }
            },
            quiz: [
              {
                q: 'ما الغرض الرئيسي من الإحصاء في علوم الآلة؟',
                options: ['تجميل البيانات', 'تحليل البيانات واتخاذ قرارات ذكية', 'حذف البيانات', 'تخزين البيانات'],
                answer: 1,
                hint: 'فكر: ماذا يفعل العالِم بالبيانات قبل بناء النموذج؟',
                explanation: 'الإحصاء يساعدنا على فهم البيانات وتحليلها لبناء نماذج AI دقيقة'
              }
            ]
          }
        ]
      },
      {
        id: 'ch2',
        title: 'الإحصاء الوصفي - Descriptive Statistics',
        pages: '16-45',
        icon: '📐',
        lessons: [
          {
            id: 'mean-median-mode',
            title: 'المتوسط والوسيط والمنوال',
            type: 'calculation',
            content: {
              steps: [
                {
                  title: '1️⃣ المتوسط الحسابي (Mean)',
                  formula: 'x̄ = Σx / n',
                  explanation: 'اجمع كل الأرقام ثم اقسمها على عددها',
                  example: {
                    data: [2, 4, 6, 8, 10],
                    solution: [
                      { step: 'اجمع الأرقام', calc: '2+4+6+8+10 = 30' },
                      { step: 'اقسم على العدد', calc: '30 ÷ 5 = 6' },
                      { step: 'النتيجة', calc: 'المتوسط = 6' }
                    ]
                  }
                },
                {
                  title: '2️⃣ الوسيط (Median)',
                  formula: 'الرقم في المنتصف بعد الترتيب',
                  explanation: 'رتب الأرقام تصاعدياً ثم اختر المنتصف',
                  example: {
                    data: [3, 1, 7, 5, 9],
                    solution: [
                      { step: 'رتب تصاعدياً', calc: '1, 3, 5, 7, 9' },
                      { step: 'اختر المنتصف', calc: 'الرقم الثالث من 5 = 5' },
                      { step: 'الوسيط = 5', calc: '✅' }
                    ]
                  }
                },
                {
                  title: '3️⃣ المنوال (Mode)',
                  formula: 'الرقم الأكثر تكراراً',
                  explanation: 'ابحث عن الرقم الذي يتكرر أكثر',
                  example: {
                    data: [2, 3, 3, 4, 5, 3, 7],
                    solution: [
                      { step: 'عدد التكرارات', calc: '2→1مرة, 3→3مرات, 4→1مرة' },
                      { step: 'الأكثر تكراراً', calc: 'الرقم 3' },
                      { step: 'المنوال = 3', calc: '✅' }
                    ]
                  }
                }
              ]
            },
            interactive: {
              type: 'calculator',
              title: 'احسب بنفسك!',
              description: 'أدخل أرقامك وسأحسب لك المتوسط والوسيط والمنوال'
            },
            quiz: [
              {
                q: 'ما متوسط الأرقام: 10, 20, 30, 40, 50 ؟',
                options: ['25', '30', '35', '40'],
                answer: 1,
                hint: 'اجمع الأرقام الخمسة ثم اقسم على 5',
                explanation: '(10+20+30+40+50) = 150 ÷ 5 = 30'
              },
              {
                q: 'ما وسيط: 7, 2, 9, 4, 5 ؟',
                options: ['4', '5', '7', '9'],
                answer: 1,
                hint: 'رتب الأرقام أولاً: 2, 4, 5, 7, 9',
                explanation: 'بعد الترتيب: 2, 4, 5, 7, 9 - الرقم الأوسط هو 5'
              }
            ]
          },
          {
            id: 'variance-std',
            title: 'التباين والانحراف المعياري',
            type: 'calculation',
            content: {
              steps: [
                {
                  title: '📊 لماذا نحتاج الانحراف المعياري؟',
                  formula: 'σ = √(Σ(x-x̄)² / n)',
                  explanation: 'يقيس مدى تشتت البيانات حول المتوسط - كيف "مبعثرة" هي الأرقام؟',
                  example: {
                    data: [2, 4, 4, 4, 5, 5, 7, 9],
                    solution: [
                      { step: 'احسب المتوسط', calc: 'x̄ = (2+4+4+4+5+5+7+9)/8 = 40/8 = 5' },
                      { step: 'اطرح المتوسط من كل رقم', calc: '(2-5)=-3, (4-5)=-1, (4-5)=-1, ...' },
                      { step: 'ارفع للقوة 2', calc: '9, 1, 1, 1, 0, 0, 4, 16' },
                      { step: 'اجمع وقسم على n', calc: '(9+1+1+1+0+0+4+16)/8 = 4' },
                      { step: 'خذ الجذر التربيعي', calc: '√4 = 2 → الانحراف المعياري = 2' }
                    ]
                  }
                }
              ]
            },
            quiz: [
              {
                q: 'إذا كان الانحراف المعياري = 0، ماذا يعني ذلك؟',
                options: [
                  'البيانات خاطئة',
                  'كل الأرقام متساوية تماماً',
                  'المتوسط = صفر',
                  'البيانات كثيرة جداً'
                ],
                answer: 1,
                hint: 'فكر: إذا كانت المسافة بين الأرقام والمتوسط = صفر...',
                explanation: 'σ=0 يعني كل الأرقام نفس القيمة، لا يوجد تشتت'
              }
            ]
          }
        ]
      },
      {
        id: 'ch3',
        title: 'التوزيعات الإحصائية',
        pages: '46-80',
        icon: '🔔',
        lessons: [
          {
            id: 'normal-dist',
            title: 'التوزيع الطبيعي - The Bell Curve',
            type: 'concept',
            content: {
              definition: 'التوزيع الطبيعي هو منحنى على شكل جرس - معظم القيم قريبة من المتوسط',
              properties: [
                '68% من البيانات تقع في نطاق σ± واحد',
                '95% في نطاق 2σ±',
                '99.7% في نطاق 3σ±'
              ],
              realExamples: [
                { title: 'طول البشر', desc: 'معظم الناس بطول متوسط، قليلون جداً أطوال أو قصار جداً' },
                { title: 'درجات الامتحانات', desc: 'معظم الطلاب يحصلون على درجات متوسطة' },
                { title: 'أوزان المنتجات', desc: 'مصانع تضمن 99.7% من منتجاتها ضمن الوزن المقبول' }
              ]
            },
            quiz: [
              {
                q: 'في التوزيع الطبيعي، كم نسبة البيانات تقع في نطاق انحراف معياري واحد؟',
                options: ['50%', '68%', '95%', '99.7%'],
                answer: 1,
                hint: 'تذكر القاعدة 68-95-99.7',
                explanation: '68% من البيانات تقع بين (μ-σ) و (μ+σ)'
              }
            ]
          }
        ]
      },
      {
        id: 'ch4',
        title: 'الارتباط والانحدار',
        pages: '81-120',
        icon: '📈',
        lessons: [
          {
            id: 'correlation',
            title: 'معامل الارتباط (Correlation)',
            type: 'calculation',
            content: {
              steps: [
                {
                  title: 'ما هو الارتباط؟',
                  formula: 'r = Σ[(x-x̄)(y-ȳ)] / √[Σ(x-x̄)² × Σ(y-ȳ)²]',
                  explanation: 'يقيس العلاقة بين متغيرين: هل يرتفعان معاً أم يتعاكسان؟',
                  example: {
                    data: 'ساعات الدراسة vs الدرجات',
                    solution: [
                      { step: 'r قريب من +1', calc: 'علاقة طردية قوية ✅ (كلما درست أكثر، حصلت على أعلى)' },
                      { step: 'r قريب من -1', calc: 'علاقة عكسية قوية ❌ (كلما زاد X نقص Y)' },
                      { step: 'r قريب من 0', calc: 'لا توجد علاقة 😐' }
                    ]
                  }
                }
              ]
            },
            quiz: [
              {
                q: 'ما قيمة r التي تدل على ارتباط طردي قوي جداً؟',
                options: ['-0.9', '0', '+0.95', '+0.1'],
                answer: 2,
                hint: 'r قريب من 1+ يعني ارتباط طردي قوي',
                explanation: '+0.95 قريب جداً من 1 → ارتباط طردي قوي جداً'
              }
            ]
          },
          {
            id: 'linear-regression',
            title: 'الانحدار الخطي - Linear Regression',
            type: 'calculation',
            content: {
              steps: [
                {
                  title: 'معادلة الانحدار الخطي',
                  formula: 'y = mx + b',
                  explanation: 'y = الناتج المتوقع، m = الميل، x = المتغير، b = نقطة القطع',
                  example: {
                    data: 'توقع درجة الطالب بناءً على ساعات دراسته',
                    solution: [
                      { step: 'احسب الميل m', calc: 'm = Σ(x-x̄)(y-ȳ) / Σ(x-x̄)²' },
                      { step: 'احسب نقطة القطع b', calc: 'b = ȳ - m×x̄' },
                      { step: 'اكتب المعادلة', calc: 'y = 10x + 20 (مثلاً)' },
                      { step: 'توقع', calc: 'درس 5 ساعات → y = 10(5)+20 = 70 درجة' }
                    ]
                  }
                }
              ]
            },
            quiz: [
              {
                q: 'في معادلة y = 5x + 10، ما الدرجة المتوقعة لمن درس 8 ساعات؟',
                options: ['40', '50', '50', '50'],
                answer: 2,
                hint: 'عوض x=8 في المعادلة: y = 5(8) + 10',
                explanation: 'y = 5×8 + 10 = 40 + 10 = 50 درجة'
              }
            ]
          }
        ]
      }
    ]
  },
  python: {
    id: 'python',
    title: 'برمجة Python',
    titleEn: 'Python Programming',
    icon: '🐍',
    color: '#FFD700',
    description: 'Python هي أسهل لغة برمجة وأقوى أداة في علوم الآلة والذكاء الاصطناعي!',
    chapters: [
      {
        id: 'py-ch1',
        title: 'الأساسيات - لا تخف، Python سهلة جداً!',
        pages: '1-30',
        icon: '🌟',
        lessons: [
          {
            id: 'variables',
            title: 'المتغيرات وأنواع البيانات',
            type: 'code',
            content: {
              intro: 'المتغير هو صندوق نحفظ فيه قيمة - تخيله كوعاء!',
              codeExamples: [
                {
                  title: 'أنواع البيانات الأساسية',
                  code: `# 📦 المتغيرات في Python
name = "أحمد"      # نص (String)
age = 20            # عدد صحيح (Integer)
gpa = 3.75          # عدد عشري (Float)
is_student = True   # صواب/خطأ (Boolean)

# طباعة القيم
print(f"مرحباً {name}!")
print(f"عمرك: {age} سنة")
print(f"معدلك: {gpa}")`,
                  output: `مرحباً أحمد!
عمرك: 20 سنة
معدلك: 3.75`
                },
                {
                  title: 'العمليات الحسابية',
                  code: `# ➕ العمليات الرياضية
x = 10
y = 3

print(x + y)   # جمع → 13
print(x - y)   # طرح → 7
print(x * y)   # ضرب → 30
print(x / y)   # قسمة → 3.33
print(x ** 2)  # قوة → 100
print(x % y)   # باقي القسمة → 1`,
                  output: `13\n7\n30\n3.3333\n100\n1`
                }
              ]
            },
            quiz: [
              {
                q: 'ما نوع البيانات للمتغير: score = 95.5 ؟',
                options: ['Integer', 'Float', 'String', 'Boolean'],
                answer: 1,
                hint: 'الأرقام العشرية (تحتوي على نقطة) هي...',
                explanation: '95.5 يحتوي على نقطة عشرية → Float'
              }
            ]
          },
          {
            id: 'lists',
            title: 'القوائم Lists - كنز Python!',
            type: 'code',
            content: {
              intro: 'القائمة مثل سلة - تحمل عدة أشياء معاً!',
              codeExamples: [
                {
                  title: 'إنشاء القوائم والتعامل معها',
                  code: `# 📋 القوائم في Python
grades = [85, 90, 78, 95, 88]

# الوصول للعناصر
print(grades[0])    # أول عنصر → 85
print(grades[-1])   # آخر عنصر → 88

# عمليات مفيدة
print(len(grades))  # عدد العناصر → 5
print(sum(grades))  # المجموع → 436
print(max(grades))  # الأعلى → 95
print(min(grades))  # الأدنى → 78

# المتوسط
avg = sum(grades) / len(grades)
print(f"المتوسط: {avg}")  # → 87.2`,
                  output: `85\n88\n5\n436\n95\n78\nالمتوسط: 87.2`
                }
              ]
            },
            quiz: [
              {
                q: 'ما ناتج len([10, 20, 30, 40]) ؟',
                options: ['3', '4', '100', '10'],
                answer: 1,
                hint: 'len() تحسب عدد العناصر',
                explanation: 'القائمة تحتوي على 4 عناصر → len = 4'
              }
            ]
          },
          {
            id: 'loops',
            title: 'الحلقات Loops - كرر بدون ملل!',
            type: 'code',
            content: {
              intro: 'الحلقة تكرر كوداً عدة مرات تلقائياً - وفر وقتك!',
              codeExamples: [
                {
                  title: 'حلقة for - الأكثر استخداماً',
                  code: `# 🔄 حلقة for
grades = [80, 90, 75, 95]

# اطبع كل درجة
for grade in grades:
    if grade >= 90:
        print(f"الدرجة {grade} - ممتاز! 🌟")
    elif grade >= 80:
        print(f"الدرجة {grade} - جيد جداً 👍")
    else:
        print(f"الدرجة {grade} - جيد 😊")`,
                  output: `الدرجة 80 - جيد جداً 👍
الدرجة 90 - ممتاز! 🌟
الدرجة 75 - جيد 😊
الدرجة 95 - ممتاز! 🌟`
                }
              ]
            },
            quiz: [
              {
                q: 'كم مرة تُنفذ الحلقة: for i in range(5) ؟',
                options: ['4 مرات', '5 مرات', '6 مرات', 'مرة واحدة'],
                answer: 1,
                hint: 'range(5) تنتج: 0, 1, 2, 3, 4',
                explanation: 'range(5) = [0,1,2,3,4] → 5 أرقام → 5 مرات'
              }
            ]
          }
        ]
      },
      {
        id: 'py-ch2',
        title: 'pandas - سحر تحليل البيانات!',
        pages: '60-100',
        icon: '🐼',
        lessons: [
          {
            id: 'pandas-basics',
            title: 'pandas - حليفك في تحليل البيانات',
            type: 'code',
            content: {
              intro: 'pandas تحول Python لأداة تحليل بيانات مذهلة - أقوى من Excel!',
              codeExamples: [
                {
                  title: 'إنشاء DataFrame والتحليل الأساسي',
                  code: `import pandas as pd

# إنشاء جدول بيانات
data = {
    'الاسم': ['أحمد', 'سارة', 'علي', 'مريم'],
    'الدرجة': [85, 92, 78, 96],
    'المادة': ['إحصاء', 'Python', 'إحصاء', 'Python']
}
df = pd.DataFrame(data)

# استعراض البيانات
print(df.head())

# إحصاءات سريعة
print(df['الدرجة'].describe())
print(f"المتوسط: {df['الدرجة'].mean():.2f}")
print(f"الأعلى: {df['الدرجة'].max()}")`,
                  output: `   الاسم  الدرجة  المادة
0  أحمد      85  إحصاء
1  سارة      92  Python
2   علي      78  إحصاء
3  مريم      96  Python

المتوسط: 87.75
الأعلى: 96`
                }
              ]
            },
            quiz: [
              {
                q: 'ماذا تفعل df.mean() في pandas؟',
                options: ['تحذف البيانات', 'تحسب متوسط الأعمدة الرقمية', 'ترتب البيانات', 'تضيف صف جديد'],
                answer: 1,
                hint: 'mean = المتوسط الحسابي',
                explanation: 'df.mean() تحسب المتوسط الحسابي لكل عمود رقمي في الجدول'
              }
            ]
          }
        ]
      }
    ]
  },
  os: {
    id: 'os',
    title: 'أنظمة التشغيل',
    titleEn: 'Operating Systems',
    icon: '💻',
    color: '#00BFA5',
    description: 'أنظمة التشغيل هي المدير الذي ينظم عمل كل برنامج في حاسوبك',
    chapters: [
      {
        id: 'os-ch1',
        title: 'مقدمة في أنظمة التشغيل',
        pages: '1-20',
        icon: '🖥️',
        lessons: [
          {
            id: 'os-intro',
            title: 'ما هو نظام التشغيل؟',
            type: 'concept',
            content: {
              definition: 'نظام التشغيل هو البرنامج الرئيسي الذي يدير جميع موارد الحاسوب',
              components: [
                { name: 'Kernel', desc: 'قلب نظام التشغيل - يتحكم في كل شيء' },
                { name: 'Process Manager', desc: 'يدير تشغيل البرامج' },
                { name: 'Memory Manager', desc: 'يوزع الذاكرة بين البرامج' },
                { name: 'File System', desc: 'ينظم حفظ الملفات' }
              ]
            },
            quiz: [
              {
                q: 'ما مهمة الـ Kernel في نظام التشغيل؟',
                options: ['عرض الصور', 'التحكم في جميع موارد الحاسوب', 'تشغيل الألعاب', 'الاتصال بالإنترنت'],
                answer: 1,
                hint: 'Kernel = النواة، وهي قلب نظام التشغيل',
                explanation: 'الـ Kernel هو المتحكم الرئيسي في الذاكرة والمعالج والأجهزة'
              }
            ]
          }
        ]
      }
    ]
  },
  communication: {
    id: 'communication',
    title: 'مهارات التواصل',
    titleEn: 'Communication Skills',
    icon: '🗣️',
    color: '#FF7043',
    description: 'مهارات التواصل تجعلك متميزاً في العمل والحياة',
    chapters: [
      {
        id: 'comm-ch1',
        title: 'التواصل الفعال',
        pages: '1-25',
        icon: '📢',
        lessons: [
          {
            id: 'comm-types',
            title: 'أنواع التواصل',
            type: 'concept',
            content: {
              definition: 'التواصل هو نقل الأفكار والمعلومات بين الناس بأسلوب واضح ومؤثر',
              types: [
                { name: 'اللفظي (Verbal)', desc: 'الكلام المباشر والاجتماعات', icon: '🗣️' },
                { name: 'الكتابي (Written)', desc: 'الرسائل والتقارير والإيميلات', icon: '✍️' },
                { name: 'غير اللفظي (Non-verbal)', desc: 'لغة الجسد والإيماءات', icon: '🤝' },
                { name: 'البصري (Visual)', desc: 'الرسوم والمخططات والعروض', icon: '📊' }
              ]
            },
            quiz: [
              {
                q: 'ماذا تعني لغة الجسد في التواصل؟',
                options: ['الكتابة', 'التواصل غير اللفظي عبر الحركات والإيماءات', 'الرسائل', 'المكالمات'],
                answer: 1,
                hint: 'Non-verbal = غير لفظي = ...',
                explanation: 'لغة الجسد هي شكل من التواصل غير اللفظي تشمل الإيماءات وتعابير الوجه'
              }
            ]
          }
        ]
      }
    ]
  }
};

// ===== QUIZ GENERATOR =====
function generateQuiz(subjectId, count = 10) {
  const subject = CURRICULUM[subjectId];
  if (!subject) return [];
  
  const allQuestions = [];
  subject.chapters.forEach(ch => {
    ch.lessons.forEach(lesson => {
      if (lesson.quiz) {
        lesson.quiz.forEach(q => {
          allQuestions.push({
            ...q,
            lesson: lesson.title,
            chapter: ch.title,
            page: ch.pages,
            difficulty: allQuestions.length < 3 ? 'easy' : allQuestions.length < 7 ? 'medium' : 'hard'
          });
        });
      }
    });
  });
  
  // Shuffle and return
  const shuffled = allQuestions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

window.CURRICULUM = CURRICULUM;
window.generateQuiz = generateQuiz;
