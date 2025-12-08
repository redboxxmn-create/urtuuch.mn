<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

<script>
  const supabaseUrl = "https://wpotnvekaoosdkvmhqgo.supabase.co";
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indwb3RudmVrYW9vc2Rrdm1ocWdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwMTU3NjQsImV4cCI6MjA4MDU5MTc2NH0.YIpy_IA9nNseYUJB3Y-adxgv9btgAt5IKP5FJpafNC0";

  const supabase = supabase.createClient(supabaseUrl, supabaseKey);

  async function insertNews() {
    const { data, error } = await supabase
      .from("news")
      .insert([
        {
          title: "Шинэ мэдээ",
          category: "Төрөл",
          image: "image_url",
          description: "Тайлбар",
          author_id: 1,
          featured: true,
          slug: "shine-medee"
        }
      ])
      .select();

    if (error) {
      console.error("Алдаа:", error);
    } else {
      console.log("Амжилттай:", data);
    }
  }

  insertNews();
</script>
