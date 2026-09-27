const StorySec = () => {
  return (
    <section className="w-full flex justify-between bg-(--white)/80">

        <div className="container w-[90%] sm:w-[85%] lg:w-[80%] py-10 sm:py-30 lg:py-15 m-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">

            <div className="w-full md:w-[50%] flex flex-col items-start gap-5 sm:gap-6">

                <h2 className="text-3xl sm:text-4xl text-(--primary) font-bold">
                    قصتنا
                </h2>

                <p className="text-sm sm:text-base text-(--txt-secondary) leading-7 sm:leading-8 font-semibold text-justify">
                    بدأنا بهدف توفير منتجات تنظيف وعطور تجمع بين الجودة وسهولة الاستخدام، ومع الوقت عملنا على تطوير مجموعة متنوعة من المنتجات لتناسب احتياجات المنازل والعملاء والمنشآت المختلفة.
                </p>

                <p className="text-sm sm:text-base text-(--txt-secondary) leading-7 sm:leading-8 font-semibold text-justify">
                    نؤمن أن منتجات التنظيف الجيدة لا تقتصر على إزالة الأوساخ فقط، بل يجب أن تمنح المستخدم إحساسًا بالنظافة والانتعاش في كل استخدام. لذلك نهتم بتقديم منتجات عملية ومتنوعة تلبي الاستخدام اليومي، مع الحرص على اختيار تركيبات مناسبة وجودة ثابتة.
                </p>
            </div>

            <div className="w-full sm:w-[80%] md:w-[40%] h-60 sm:h-70 md:h-70">
                <img
                    src="/images/مطهر-ليمون-3.jpeg"
                    alt="about us image"
                    className="w-full h-full rounded-md object-cover"
                />
            </div>

        </div>

    </section>
 )
}

export default StorySec