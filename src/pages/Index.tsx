import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const publications = [
    {
      title: "Современные подходы в педагогике высшего образования",
      journal: "Вестник образования",
      year: "2023",
      type: "Статья"
    },
    {
      title: "Инновационные методы преподавания: теория и практика",
      journal: "Педагогический журнал",
      year: "2022",
      type: "Монография"
    },
    {
      title: "Цифровая трансформация образовательного процесса",
      journal: "Современное образование",
      year: "2023",
      type: "Статья"
    },
    {
      title: "Методология научных исследований в гуманитарных науках",
      journal: "Научный альманах",
      year: "2021",
      type: "Учебное пособие"
    }
  ];

  const awards = [
    {
      title: "Почетная грамота Министерства образования",
      year: "2023",
      description: "За выдающиеся достижения в области образования"
    },
    {
      title: "Премия \"Лучший преподаватель года\"",
      year: "2022",
      description: "По результатам студенческого голосования"
    },
    {
      title: "Государственная премия в области науки",
      year: "2021",
      description: "За значительный вклад в развитие педагогических наук"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">Портфолио преподавателя</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">О преподавателе</a>
              <a href="#awards" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Достижения</a>
              <a href="#publications" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Публикации</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Контакты</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="border-l-4 border-blue-600 pl-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Анна Викторовна Морозова
                </h1>
                <p className="text-xl text-gray-700 mb-2 font-medium">Доктор педагогических наук</p>
                <p className="text-lg text-gray-600">Профессор кафедры педагогических наук</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Основные направления деятельности:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Педагогические науки</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Высшее образование</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Методология исследований</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Научное консультирование</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="/img/abb745f7-d415-49a7-a3e5-dca699e6784d.jpg"
                alt="Профессор Анна Викторовна Морозова"
                className="w-72 h-96 object-cover mx-auto border-4 border-white shadow-lg"
              />
              <div className="mt-6 bg-blue-600 text-white px-6 py-3 inline-block">
                <p className="font-semibold">Стаж работы: 20+ лет</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gray-100">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Профессиональное образование</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <Icon name="User" size={24} className="text-blue-600 mr-3" />
                Опыт работы
              </h3>
              <div className="space-y-4">
                <div className="border-l-3 border-blue-600 pl-4">
                  <p className="font-medium text-gray-800">Преподавательская деятельность</p>
                  <p className="text-gray-600">Более 20 лет в сфере высшего образования</p>
                </div>
                <div className="border-l-3 border-blue-600 pl-4">
                  <p className="font-medium text-gray-800">Научная деятельность</p>
                  <p className="text-gray-600">Автор более 50 научных публикаций</p>
                </div>
                <div className="border-l-3 border-blue-600 pl-4">
                  <p className="font-medium text-gray-800">Консультационная деятельность</p>
                  <p className="text-gray-600">Эксперт по вопросам педагогики</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <Icon name="GraduationCap" size={24} className="text-blue-600 mr-3" />
                Образование
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Доктор педагогических наук</h4>
                    <p className="text-gray-600">Московский педагогический государственный университет</p>
                    <p className="text-blue-600 font-medium">2015 г.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-400 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Кандидат педагогических наук</h4>
                    <p className="text-gray-600">МГУ имени М.В. Ломоносова</p>
                    <p className="text-gray-500 font-medium">2008 г.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Научные достижения и награды</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-blue-600 mx-auto mb-4 flex items-center justify-center">
                    <Icon name="Award" size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-800 leading-tight">{award.title}</CardTitle>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 text-sm font-medium mx-auto w-fit mt-2">{award.year}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16 px-6 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Научные публикации</h2>
          <div className="grid gap-6">
            {publications.map((pub, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:border-blue-300 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">{pub.title}</h3>
                      <p className="text-gray-600 mb-2 text-sm">{pub.journal}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center justify-end space-x-3">
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 text-xs font-medium">{pub.type}</span>
                        <span className="text-blue-600 font-semibold">{pub.year}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="bg-blue-50 border border-blue-200 p-4 text-center">
              <p className="text-gray-700 font-medium">
                Общее количество публикаций: <span className="text-blue-600 font-bold text-xl">52</span>
              </p>
            </div>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center space-x-4">
                <Icon name="Mail" size={20} className="text-blue-400" />
                <span className="text-lg">a.morozova@university.edu</span>
              </div>
              <div className="flex items-center space-x-4">
                <Icon name="Phone" size={20} className="text-blue-400" />
                <span className="text-lg">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-4">
                <Icon name="MapPin" size={20} className="text-blue-400" />
                <span className="text-lg">Москва, ул. Университетская, д. 15, каб. 301</span>
              </div>
            </div>
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6">Время консультаций</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Вторник:</span>
                  <span>14:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Четверг:</span>
                  <span>10:00 - 12:00</span>
                </div>
                <Separator className="bg-gray-700 my-4" />
                <p className="text-gray-400 text-sm">
                  Предварительная запись по электронной почте
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p>&copy; 2024 Анна Викторовна Морозова. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;