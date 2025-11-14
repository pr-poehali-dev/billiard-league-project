import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/223a58ed-54aa-4497-8b85-7890c6756d10.png" 
                alt="ЛБС Барс" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h1 className="font-bold text-xl text-primary">ЛБС «Барс»</h1>
                <p className="text-xs text-muted-foreground">Лига Бильярдного Спорта</p>
              </div>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О лиге</button>
              <button onClick={() => scrollToSection('tournaments')} className="text-sm font-medium hover:text-primary transition-colors">Турниры</button>
              <button onClick={() => scrollToSection('school')} className="text-sm font-medium hover:text-primary transition-colors">Школа</button>
              <button onClick={() => scrollToSection('trainer')} className="text-sm font-medium hover:text-primary transition-colors">Тренер</button>
              <button onClick={() => scrollToSection('gallery')} className="text-sm font-medium hover:text-primary transition-colors">Фото</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('contacts')} className="hidden md:flex">
              Записаться
            </Button>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-8 animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/files/223a58ed-54aa-4497-8b85-7890c6756d10.png" 
              alt="ЛБС Барс Logo" 
              className="h-48 w-48 object-contain"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 animate-fade-in">
            ЛБС «Барс»
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Объединяющая и развивающая платформа для всех любителей бильярда
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" onClick={() => scrollToSection('school')} className="text-lg px-8">
              <Icon name="GraduationCap" className="mr-2" size={20} />
              Записаться в школу
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('tournaments')} className="text-lg px-8">
              <Icon name="Trophy" className="mr-2" size={20} />
              Участвовать в турнирах
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">О лиге</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
            ЛБС «Барс» — лига бильярдного спорта, созданная для вашего развития
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-secondary hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Icon name="Sparkles" className="text-secondary" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Почему Лига Спорта?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Потому что мы — за спортивный дух, честную игру и стремление к вершинам мастерства. 
                      За победы, достижения и уважение к сопернику.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Icon name="PawPrint" className="text-accent" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Почему "Барс"?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Барс — символ мудрости, духовной силы, мужества и храбрости. 
                      Это символ победителя, умеющего держать удар и идти к цели.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="tournaments" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Icon name="Trophy" className="mx-auto mb-4 text-primary" size={48} />
            <h2 className="text-4xl font-bold mb-4 text-primary">Лига «Барс 30+»</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Регулярная турнирная лига для всех бильярдистов старше 30 лет
            </p>
          </div>

          <Card className="max-w-4xl mx-auto border-2">
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Calendar" className="text-secondary mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Расписание турниров</h4>
                      <p className="text-muted-foreground">Каждую субботу и воскресенье</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" className="text-secondary mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Место проведения</h4>
                      <p className="text-muted-foreground">БК «Central»</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Users" className="text-secondary mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Дух соперничества</h4>
                      <p className="text-muted-foreground">Честная игра, дружба и азарт</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Award" className="text-secondary mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Развитие навыков</h4>
                      <p className="text-muted-foreground">Стремление к мастерству</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t text-center">
                <Button size="lg" onClick={() => scrollToSection('contacts')}>
                  Записаться на турнир
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="school" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Icon name="GraduationCap" className="mx-auto mb-4 text-primary" size={48} />
            <h2 className="text-4xl font-bold mb-4 text-primary">Школа Бильярда</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Профессиональное обучение от многократного чемпиона
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            <Card className="border-2 hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="pt-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Baby" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Детская секция</h3>
                <p className="text-muted-foreground mb-4">Дети от 10 до 17 лет</p>
                <p className="text-sm text-muted-foreground">
                  Основы техники, тактика игры, развитие концентрации
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="pt-6 text-center">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Sun" className="text-secondary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Дневные занятия</h3>
                <p className="text-muted-foreground mb-4">Взрослые от 17 до 99 лет</p>
                <p className="text-sm text-muted-foreground">
                  Индивидуальный подход, техника ударов, стратегия
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="pt-6 text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Moon" className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Вечерние тренировки</h3>
                <p className="text-muted-foreground mb-4">Для всех желающих</p>
                <p className="text-sm text-muted-foreground">
                  Групповые занятия, практика, анализ игры
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-4xl mx-auto border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Дополнительные программы</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                  <Icon name="Target" className="text-primary" size={24} />
                  <span className="font-medium">Тренинги и мастер-классы</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                  <Icon name="Building2" className="text-primary" size={24} />
                  <span className="font-medium">Корпоративные турниры</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                  <Icon name="Medal" className="text-primary" size={24} />
                  <span className="font-medium">Спортивные соревнования</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                  <Icon name="Star" className="text-primary" size={24} />
                  <span className="font-medium">Вечерняя лига субботы 30+</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="trainer" className="py-20 px-4 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto">
          <Card className="max-w-5xl mx-auto border-none shadow-2xl">
            <CardContent className="pt-12 pb-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-white" size={96} />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h2 className="text-3xl font-bold mb-4 text-primary">Денис Рейфисов</h2>
                  <p className="text-lg font-semibold text-secondary mb-4">
                    Главный тренер и руководитель ЛБС «Барс»
                  </p>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-secondary mt-1 flex-shrink-0" size={20} />
                      <p>Бильярдист с почти 40-летним стажем</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-secondary mt-1 flex-shrink-0" size={20} />
                      <p>Тренер-преподаватель по бильярду</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-secondary mt-1 flex-shrink-0" size={20} />
                      <p>Многократный чемпион Новосибирской области</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-secondary mt-1 flex-shrink-0" size={20} />
                      <p>Подготовил чемпионов НСО: Алексея Ладанова, Артёма Смирнова, Ольгу Рейфисову и других</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Icon name="Camera" className="mx-auto mb-4 text-primary" size={48} />
            <h2 className="text-4xl font-bold mb-4 text-primary">Фото и видео</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Моменты с турниров, тренировок и достижений наших спортсменов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            <Card className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Icon name="Trophy" className="text-primary" size={64} />
              </div>
              <CardContent className="pt-4">
                <h3 className="font-semibold mb-2">Турниры</h3>
                <p className="text-sm text-muted-foreground">Фото с соревнований и награждений</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                <Icon name="Users" className="text-secondary" size={64} />
              </div>
              <CardContent className="pt-4">
                <h3 className="font-semibold mb-2">Тренировки</h3>
                <p className="text-sm text-muted-foreground">Процесс обучения и мастер-классы</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <Icon name="Award" className="text-accent" size={64} />
              </div>
              <CardContent className="pt-4">
                <h3 className="font-semibold mb-2">Достижения</h3>
                <p className="text-sm text-muted-foreground">Награды и победы наших спортсменов</p>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-4xl mx-auto border-2 border-primary/20">
            <CardContent className="pt-8 text-center">
              <Icon name="Video" className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-2xl font-bold mb-4">Больше фото и видео в наших соцсетях</h3>
              <p className="text-muted-foreground mb-6">
                Подписывайтесь на нас ВКонтакте, чтобы не пропустить новые материалы и анонсы турниров
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" asChild>
                  <a href="https://vk.link/lbs_bars01" target="_blank" rel="noopener noreferrer">
                    <Icon name="MessageSquare" className="mr-2" size={20} />
                    Группа ВКонтакте
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-muted to-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Свяжитесь с нами</h2>
            <p className="text-muted-foreground text-lg">
              Запишитесь на пробное занятие или узнайте подробности о турнирах
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Телефон</p>
                      <a href="tel:+79231922477" className="text-secondary hover:underline text-lg">
                        +7 (923) 192-24-77
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Адрес</p>
                      <p className="text-muted-foreground">Ленина 25, Новосибирск</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="MessageCircle" className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Telegram</p>
                      <a href="https://t.me/lbs_bars01" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                        @lbs_bars01
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="MessageSquare" className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">ВКонтакте</p>
                      <a href="https://vk.link/lbs_bars01" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                        vk.link/lbs_bars01
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-bold mb-6">Записаться на занятие</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Хватит мечтать о победах, пора действовать! Запишитесь на пробное занятие прямо сейчас 
                    и станьте частью команды "Барс"!
                  </p>
                  <div className="space-y-3 pt-4">
                    <Button className="w-full" size="lg" asChild>
                      <a href="tel:+79231922477">
                        <Icon name="Phone" className="mr-2" size={20} />
                        Позвонить
                      </a>
                    </Button>
                    <Button className="w-full" size="lg" variant="outline" asChild>
                      <a href="https://t.me/lbs_bars01" target="_blank" rel="noopener noreferrer">
                        <Icon name="Send" className="mr-2" size={20} />
                        Написать в Telegram
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/223a58ed-54aa-4497-8b85-7890c6756d10.png" 
                  alt="ЛБС Барс" 
                  className="h-12 w-12 object-contain bg-white rounded-full p-1"
                />
                <div>
                  <h3 className="font-bold text-lg">ЛБС «Барс»</h3>
                  <p className="text-sm text-white/80">Лига Бильярдного Спорта</p>
                </div>
              </div>
              <p className="text-white/70 text-sm">
                Объединяющая платформа для всех любителей бильярда
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Быстрые ссылки</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => scrollToSection('about')} className="block text-white/80 hover:text-white transition-colors">О лиге</button>
                <button onClick={() => scrollToSection('tournaments')} className="block text-white/80 hover:text-white transition-colors">Турниры</button>
                <button onClick={() => scrollToSection('school')} className="block text-white/80 hover:text-white transition-colors">Школа бильярда</button>
                <button onClick={() => scrollToSection('trainer')} className="block text-white/80 hover:text-white transition-colors">О тренере</button>
                <button onClick={() => scrollToSection('gallery')} className="block text-white/80 hover:text-white transition-colors">Фото и видео</button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-white/80">
                <p>Ленина 25, Новосибирск</p>
                <p>+7 (923) 192-24-77</p>
                <a href="https://t.me/lbs_bars01" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
                  Telegram: @lbs_bars01
                </a>
                <a href="https://vk.link/lbs_bars01" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
                  ВКонтакте
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>© 2024 ЛБС «Барс». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;