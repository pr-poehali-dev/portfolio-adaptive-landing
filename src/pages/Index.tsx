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
    <div className="min-h-screen bg-gradient-to-br from-beige-50 to-tan-100">
      {/* Header */}
      <header className="bg-beige-50/90 backdrop-blur-sm border-b border-tan-200 sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-wood-800">Портфолио</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-wood-600 hover:text-wood-800 transition-colors">Обо мне</a>
              <a href="#awards" className="text-wood-600 hover:text-wood-800 transition-colors">Награды</a>
              <a href="#publications" className="text-wood-600 hover:text-wood-800 transition-colors">Публикации</a>
              <a href="#contact" className="text-wood-600 hover:text-wood-800 transition-colors">Контакты</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left animate-fade-in">
              <h1 className="text-5xl font-bold text-wood-800 mb-6 leading-tight">
                Анна Викторовна
                <span className="block text-wood-600 text-3xl mt-2">Морозова</span>
              </h1>
              <p className="text-xl text-wood-600 mb-8 leading-relaxed">
                Профессор кафедры педагогических наук, доктор педагогических наук, 
                автор более 50 научных публикаций
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-wood-800 text-beige-50">Педагогические науки</Badge>
                <Badge variant="secondary" className="bg-tan-700 text-beige-50">Высшее образование</Badge>
                <Badge variant="secondary" className="bg-wood-600 text-beige-50">Методология</Badge>
              </div>
            </div>
            <div className="flex justify-center animate-scale-in">
              <img 
                src="/img/abb745f7-d415-49a7-a3e5-dca699e6784d.jpg"
                alt="Профессор Анна Викторовна Морозова"
                className="w-80 h-80 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-beige-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-wood-800 text-center mb-12">Обо мне</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-slate-700 leading-relaxed">
                Более 20 лет посвящаю себя преподавательской и научной деятельности. 
                Специализируюсь на современных методах обучения и инновационных подходах в образовании.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Моя педагогическая философия основана на индивидуальном подходе к каждому студенту 
                и создании благоприятной среды для интеллектуального развития.
              </p>
            </div>
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold text-wood-800 mb-6">Образование</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-wood-800 pl-4">
                  <h4 className="font-semibold text-wood-800">Доктор педагогических наук</h4>
                  <p className="text-wood-600">Московский педагогический государственный университет, 2015</p>
                </div>
                <div className="border-l-4 border-tan-700 pl-4">
                  <h4 className="font-semibold text-wood-800">Кандидат педагогических наук</h4>
                  <p className="text-wood-600">МГУ имени М.В. Ломоносова, 2008</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-16 px-6 bg-tan-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-wood-800 text-center mb-12">Научные награды и достижения</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="bg-beige-50 shadow-lg hover:shadow-xl transition-shadow animate-fade-in border-0">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-wood-800 to-tan-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="Award" size={28} className="text-beige-50" />
                  </div>
                  <CardTitle className="text-xl text-wood-800">{award.title}</CardTitle>
                  <Badge className="bg-wood-800 text-beige-50 w-fit mx-auto">{award.year}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-wood-600 text-center leading-relaxed">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16 px-6 bg-beige-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-wood-800 text-center mb-12">Публикации и статьи</h2>
          <div className="grid gap-6">
            {publications.map((pub, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in border border-tan-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-wood-800 mb-2">{pub.title}</h3>
                      <p className="text-wood-600 mb-2">{pub.journal}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="border-wood-800 text-wood-800 mb-2">{pub.type}</Badge>
                      <p className="text-wood-500 font-medium">{pub.year}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-wood-600 text-lg">
              Общее количество публикаций: <span className="font-semibold text-wood-800">52</span>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-wood-800 text-beige-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center space-x-4">
                <Icon name="Mail" size={24} className="text-tan-300" />
                <span className="text-lg">a.morozova@university.edu</span>
              </div>
              <div className="flex items-center space-x-4">
                <Icon name="Phone" size={24} className="text-tan-300" />
                <span className="text-lg">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-4">
                <Icon name="MapPin" size={24} className="text-tan-300" />
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
                <Separator className="bg-tan-600 my-4" />
                <p className="text-tan-300 text-sm">
                  Предварительная запись по электронной почте
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wood-900 text-tan-300 py-8 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p>&copy; 2024 Анна Викторовна Морозова. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;