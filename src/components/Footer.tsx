import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* top */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* left */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">MERVE AYDOĞDU</div>
          </Link>
          <p>Yeniyol cd. Cadde Meram Avm No:1 Meram/Konya</p>
          <span className="font-semibold">info@merveaydogdu.com</span>
          <span className="font-semibold">+9 0532 555 66 77</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* center */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col  justify-between">
            <h1 className="font-medium text-lg">ŞİRKET</h1>
            <div className=" flex flex-col gap-6">
              <Link href="">Hakkımızda</Link>
              <Link href="">Kariyer</Link>
              <Link href="">Hissedarlar</Link>
              <Link href="">Blog</Link>
              <Link href="">İletişim</Link>
            </div>
          </div>
          <div className="flex flex-col  justify-between">
            <h1 className="font-medium text-lg">ALIŞVERİŞ</h1>
            <div className=" flex flex-col gap-6">
              <Link href="">Yeni Gelenler</Link>
              <Link href="">Aksesuar</Link>
              <Link href="">Üst Giyim</Link>
              <Link href="">Alt Giyim</Link>
              <Link href="">Takım</Link>
            </div>
          </div>
          <div className="flex flex-col  justify-between">
            <h1 className="font-medium text-lg">YARDIM</h1>
            <div className=" flex flex-col gap-6">
              <Link href="">Müşteri İlişkileri</Link>
              <Link href="">Hesabım</Link>
              <Link href="">Mağaza Bul</Link>
              <Link href="">KVKK</Link>
              <Link href="">Hediye Kartı</Link>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">ABONE OL</h1>
          <p>
            Son trendler, indirim ve kampanyalardan haberdar olmak için abone ol
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="EPosta Adresi"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-lama text-white">Katıl</button>
          </div>
            <span className="font-semibold">Güvenli Ödeme Yöntemleri</span>
            <div className="flex justify-between">
              <Image src="/discover.png" alt="" width={40} height={20} />
              <Image src="/skrill.png" alt="" width={40} height={20} />
              <Image src="/paypal.png" alt="" width={40} height={20} />
              <Image src="/mastercard.png" alt="" width={40} height={20} />
              <Image src="/visa.png" alt="" width={40} height={20} />
            </div>
        </div>
      </div>

      {/* bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© 2024 Merve Aydoğdu Butik</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Dil</span>
            <span className="font-medium">Türkçe</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Para Birimi</span>
            <span className="font-medium">TL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
