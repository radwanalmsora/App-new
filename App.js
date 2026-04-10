import React, { useState } from 'react';
import { IonApp, IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonList, IonItem } from '@ionic/react';

const App = () => {
  const [amount, setAmount] = useState('');
  const [list, setList] = useState([]);

  const addExpense = () => {
    if (!amount) return;
    setList([...list, amount]);
    setAmount('');
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>💰 Expense Tracker</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonInput
          placeholder="أدخل المبلغ"
          value={amount}
          onIonChange={e => setAmount(e.detail.value)}
        />
        <IonButton expand="block" onClick={addExpense}>
          إضافة
        </IonButton>

        <IonList>
          {list.map((item, index) => (
            <IonItem key={index}>{item} $</IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonApp>
  );
};

export default App;
