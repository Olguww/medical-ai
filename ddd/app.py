from flask import Flask, render_template, request, jsonify
import datetime
import random
app = Flask(__name__)
def generate_random_date():
    current_time = datetime.datetime.now()
    next_week = current_time + datetime.timedelta(days=7)
    
    random_date = current_time + datetime.timedelta(days=random.randint(0, 7), hours=random.randint(8, 16), minutes=random.choice([0, 30]))
    
    if random_date > next_week:
        random_date = next_week
    
    return random_date.strftime("%A, %B %d, %Y at %I:%M %p")
class Database:
    def __init__(self):
        self.appointments = {}
        self.data = {
            "Yüksek ateş.Şiddetli ,kas ve eklem,ağrıları,Halsizlik,Öksürük": "Grip",
            "Aşırı susama ve sık idrara çıkma Açlık hissinde artış,Ağız kuruluğu,Yorgunluk,Bulanık görme": "Diyabet",
            "Baş ağrısı, genellikle ensede,Baş dönmesi veya sersemlik hissi,Burun kanaması,Nefes darlığı,Göğüs ağrısı": "Hiper tansiyonunuz olabilirsiniz. Derhal bir sağlık profesyoneli ile iletişime geçmelisiniz.",
            "Mide Yanması,Regürjitasyon,Boğaz Ağrısı veya Tahriş,Yutkunma Zorluğu,Öğürme ve Bulantı,Gece Öksürüğü,Göğüs Ağrısı,Üst Karın Ağrıs" : "Reflü",  
            "Ateş,Öksürük,Nefes Darlığı,Boğaz Ağrısı,Kas veya Eklem Ağrıları,Baş Ağrısı,Tat ve Koku Kaybı,İshal veya Karın Ağrısı:,Göğüs Ağrısı veya Baskı Hissi,Deri Döküntüleri veya Parıltılar,Konfüzyon veya Zihinsel Karışıklık": "COVID-19, SARS-CoV-2"
        }
    

    def get_answer(self, user, question):
        if (len(user) < 1):
            return "Adınızı girin~"
        if (question == "Randevu olustur"):
            self.appointments[user] = generate_random_date()
            return "Randevunuz Olusturuldu.: " + self.appointments[user]
        elif (question == "Randevum ne zaman?"):
            if (user in self.appointments):
                return "Randevunuz mevcut: " + self.appointments[user]
            else:
                return "Randevunuz bulunmamaktadir"
        return self.data.get(question, "Üzgünüm bu konu hakkında bilgim yok.")

db = Database()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_answer', methods=['POST'])
def get_answer():
    question = request.json['question']
    user = request.json['user']
    print(request.json)
    answer = db.get_answer(user,question)
    return jsonify({'answer': answer})

if __name__ == '__main__':
    app.run(debug=True)
