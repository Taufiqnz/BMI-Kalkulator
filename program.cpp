#include <iostream>
using namespace std;

int main() {
    // Deklarasi variabel
    float tinggi, berat;

    // Input tinggi dan berat
    cout << "Masukan tinggi badan (cm): ";
    cin >> tinggi;
    cout << "Masukan berat badan (kg): ";
    cin >> berat;

    // Kalkulasi IMT
    float hasil = berat / ((tinggi / 100) * (tinggi / 100));

    // Menentukan kategori berdasarkan IMT
    if (hasil <= 18.5) {
        cout << "IMT ANDA: " << hasil << " Berat badan kurang";
    } else if (hasil > 18.5 && hasil <= 22.9) {
        cout << "IMT ANDA: " << hasil << " Berat badan normal";
    } else if (hasil >= 23 && hasil <= 29.9) {
        cout << "IMT ANDA: " << hasil << " Kelebihan berat badan";
    } else if (hasil >= 30) {
        cout << "IMT ANDA: " << hasil << " Obesitas";
    }

    return 0;
}
