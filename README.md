# Wordle

- UI

UI jest tworzone za pomocą TypeScript w prepareHTML.ts Składa się z h1, grid 5x6 tworzonych za pomocą pętli. Na koniec 2 przyciski. + CSS

- Logika gry

1. Losowanie wyrazu - z listy z wyrazami 5 literowymi losujemy jeden wyraz i zapisujemy w randomWord
2. Pisanie w kwadracikach - Zbieramy wszystkie kwadraciki i kierujemy sie po nich używając column, wierszy i id. Kiedy wpisujemy literę w danym kwadraciku wpisujemy wprowadzoną literę, potem dodajemy tą literę do naszego word i przechodzimy do następnego kwadracika. Przy naciśnięciu Backspace usuwamy tekst z kwadracika i przesuwamy się do tyłu. Gdy wszystkie 5 pól jest wypełnionych i kliknięty zostanie Enter - zacznie się sprawdzanie słowa i przejście do następnej linii.
3. Sprawdzenie słowa: W tym idziemy litera po literze, najpierw sprawdzając czy ta pozycja w obydwu wyrazach jest taka sama, jeśli jest - dodajemy klasę correct do kwadracika, która zmienia background na zielony, jeśli nie sprawdzamy czy dana litera jest w wylosowanym wyrazie, jeśli tak - dodajemy klasę present do kwadracika kolorując go na pomarańczowo, jeśli nie - dodaje klasę absent kolorując kwadaracik na szaro. Potem zwracza czy gra jest wygrana - zwraca true, jeśli nie - zwraca false
4. Restart gry - przechodzimy po wszystkicgh kwadracikach usuwając tekst i klasy