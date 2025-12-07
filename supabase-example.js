// @supabase/supabase-js-ийг импортлох
const { createClient } = require('@supabase/supabase-js');

// Таны Supabase URL болон API key
const supabaseUrl = 'https://wpotnvekaoosdkvmhqgo.supabase.co';  // Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indwb3RudmVrYW9vc2Rrdm1ocWdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwMTU3NjQsImV4cCI6MjA4MDU5MTc2NH0.YIpy_IA9nNseYUJB3Y-adxgv9btgAt5IKP5FJpafNC0';  // Supabase API key

// Supabase client үүсгэх
const supabase = createClient(supabaseUrl, supabaseKey);

// Мэдээ оруулах функц
const insertNews = async () => {
  const { data, error } = await supabase
    .from('news')
    .insert([
      {
        title: 'Шинэ мэдээ',
        category: 'Төрөл',
        image: 'image_url',
        description: 'Тайлбар',
        author_id: 1,  // Author-ийн ID
        featured: true,  // Онцлох мэдээ эсэх
        slug: 'shine-medee',  // Slug (URL-ийн нэр)
      },
    ])
    .select();  // Өгөгдлийг буцаах

  if (error) {
    console.error('Алдаа:', error.message);  // Алдааг шалгах
  } else {
    console.log('Мэдээ амжилттай нэмэгдлээ:', data);  // Амжилттай оруулсан мэдээ
  }
};

// insertNews функц дуудах
insertNews();

