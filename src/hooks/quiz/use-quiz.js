// Cấu trúc dữ liệu:

// correctAnswer: Chỉ số đáp án đúng (bắt đầu từ 0)
// difficulty: Mức độ khó ("easy", "medium", "hard")
// options: Mảng 4 phương án trả lời

// Phân bố:

// Câu dễ (easy): 15 câu (1-15)
// Câu trung bình (medium): 9 câu (16-24)
// Câu khó (hard): 6 câu (25-30)

//JSON data

const quizData = {
  title: "Gia đình trong thời kỳ quá độ lên Chủ nghĩa Xã hội",
  description: "Bộ câu hỏi trắc nghiệm về gia đình trong thời kỳ quá độ",
  totalQuestions: 30,
  questions: [
    {
      id: 1,
      question:
        "Theo quan điểm Mác-Lênin, gia đình được coi là gì trong cơ thể xã hội?",
      options: [
        "Nền tảng kinh tế",
        "Tế bào của cơ thể xã hội",
        "Đơn vị chính trị",
        "Trung tâm văn hóa",
      ],
      correctAnswer: 1,
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        'Ai là tác giả của tác phẩm "Nguồn gốc của gia đình, của chế độ tư hữu và của nhà nước"?',
      options: ["C. Mác", "V.I. Lê-nin", "Ph. Ăngghen", "Lewis H. Morgan"],
      correctAnswer: 2,
      difficulty: "easy",
    },
    {
      id: 3,
      question: "Theo Mác-Ăngghen, gia đình là:",
      options: [
        "Một phạm trù vĩnh cửu, tồn tại mãi mãi",
        "Một phạm trù lịch sử, thay đổi theo xã hội",
        "Một hiện tượng tự nhiên không thay đổi",
        "Một tổ chức chính trị",
      ],
      correctAnswer: 1,
      difficulty: "easy",
    },
    {
      id: 4,
      question:
        "Sự xuất hiện của chế độ nào đánh dấu bước ngoặt quyết định trong lịch sử gia đình?",
      options: [
        "Chế độ phong kiến",
        "Chế độ tư bản chủ nghĩa",
        "Chế độ tư hữu về tư liệu sản xuất",
        "Chế độ xã hội chủ nghĩa",
      ],
      correctAnswer: 2,
      difficulty: "easy",
    },
    {
      id: 5,
      question: "Theo V.I. Lê-nin, gia đình là gì?",
      options: [
        "Đơn vị kinh tế của xã hội",
        "Cái nôi thân yêu nuôi dưỡng cả đời người",
        "Tổ chức chính trị cơ bản",
        "Trường học đầu tiên",
      ],
      correctAnswer: 1,
      difficulty: "easy",
    },
    {
      id: 6,
      question: "Phong trào nào của phụ nữ miền Bắc được khởi xướng năm 1965?",
      options: ["Ba sẵn sàng", "Ba đảm đang", "Ba chống", "Ba tự"],
      correctAnswer: 1,
      difficulty: "easy",
    },
    {
      id: 7,
      question:
        "Quy mô hộ gia đình trung bình Việt Nam năm 2019 là bao nhiêu người/hộ?",
      options: ["4,8 người", "4,5 người", "4,1 người", "3,6 người"],
      correctAnswer: 3,
      difficulty: "easy",
    },
    {
      id: 8,
      question: "Tỷ số giới tính khi sinh (TSGTKS) ở Việt Nam năm 2019 là:",
      options: ["104/100", "106/100", "111,5/100", "115/100"],
      correctAnswer: 2,
      difficulty: "easy",
    },
    {
      id: 9,
      question: "Mức tỷ số giới tính sinh học tự nhiên là:",
      options: [
        "100-102 bé trai/100 bé gái",
        "104-106 bé trai/100 bé gái",
        "108-110 bé trai/100 bé gái",
        "110-112 bé trai/100 bé gái",
      ],
      correctAnswer: 1,
      difficulty: "easy",
    },
    {
      id: 10,
      question: 'Phong trào "Ba đảm đang" gồm những nội dung nào?',
      options: [
        "Đảm đang trong gia đình, công sở và xã hội",
        "Đảm nhiệm sản xuất, gia đình và phục vụ chiến đấu",
        "Đảm bảo kinh tế, văn hóa và quốc phòng",
        "Đảm đương học tập, lao động và kháng chiến",
      ],
      correctAnswer: 1,
      difficulty: "easy",
    },
    {
      id: 11,
      question:
        "Gia đình truyền thống Việt Nam được xây dựng trên nền tảng nào?",
      options: [
        "Các giá trị Phật giáo",
        "Các giá trị Nho giáo",
        "Các giá trị Đạo giáo",
        "Các giá trị Công giáo",
      ],
      correctAnswer: 1,
      difficulty: "easy",
    },
    {
      id: 12,
      question: "Việt Nam bắt đầu thời kỳ Đổi mới từ năm nào?",
      options: ["1975", "1980", "1986", "1990"],
      correctAnswer: 2,
      difficulty: "easy",
    },
    {
      id: 13,
      question: "Theo Mác-Ăngghen, trong xã hội tư bản, hôn nhân trở thành:",
      options: [
        "Một tình yêu tự nguyện",
        "Một hợp đồng kinh tế",
        "Một nghĩa vụ đạo đức",
        "Một nghi lễ tôn giáo",
      ],
      correctAnswer: 1,
      difficulty: "easy",
    },
    {
      id: 14,
      question:
        'Ai là người đầu tiên kêu gọi "chấm dứt sự phân công lao động theo giới trong gia đình"?',
      options: ["Ph. Ăngghen", "V.I. Lê-nin", "C. Mác", "Hồ Chí Minh"],
      correctAnswer: 2,
      difficulty: "easy",
    },
    {
      id: 15,
      question: "Xu hướng chính của cấu trúc gia đình Việt Nam hiện nay là:",
      options: [
        "Gia đình đa thế hệ tăng lên",
        "Gia đình hạt nhân thay thế dần gia đình đa thế hệ",
        "Gia đình mở rộng phổ biến",
        "Gia đình ba thế hệ là chủ đạo",
      ],
      correctAnswer: 1,
      difficulty: "easy",
    },
    {
      id: 16,
      question:
        "Theo Mác-Ăngghen, tại sao gia đình một vợ một chồng ra đời trong xã hội có chế độ tư hữu?",
      options: [
        "Để tăng cường tình yêu vợ chồng",
        "Để xác định người thừa kế tài sản",
        "Để thực hiện bình đẳng giới",
        "Để phù hợp với đạo đức xã hội",
      ],
      correctAnswer: 1,
      difficulty: "medium",
    },
    {
      id: 17,
      question:
        "Điều kiện tiên quyết để xây dựng gia đình mới trong xã hội cộng sản là:",
      options: [
        "Phát triển kinh tế",
        "Nâng cao trình độ học vấn",
        "Giải phóng phụ nữ",
        "Cải cách pháp luật",
      ],
      correctAnswer: 2,
      difficulty: "medium",
    },
    {
      id: 18,
      question: 'Vấn đề "gánh nặng kép" của phụ nữ đề cập đến:',
      options: [
        "Phải làm hai công việc khác nhau",
        "Phải chịu trách nhiệm cả công việc xã hội và gia đình",
        "Phải nuôi hai thế hệ",
        "Phải học hai ngành nghề",
      ],
      correctAnswer: 1,
      difficulty: "medium",
    },
    {
      id: 19,
      question:
        "Theo nội dung báo cáo, mâu thuẫn nào xuất hiện trong quá trình cải tạo gia đình ở Xô viết?",
      options: [
        "Mâu thuẫn giữa thành thị và nông thôn",
        "Mâu thuẫn giữa chính sách tiến bộ và thực tiễn xã hội bảo thủ",
        "Mâu thuẫn giữa các tầng lớp xã hội",
        "Mâu thuẫn giữa các thế hệ",
      ],
      correctAnswer: 1,
      difficulty: "medium",
    },
    {
      id: 20,
      question: "Dự báo dư thừa nam giới ở Việt Nam vào giữa thế kỷ 21 là:",
      options: ["0,5-1 triệu", "1-1,5 triệu", "1,5-2,5 triệu", "3-4 triệu"],
      correctAnswer: 2,
      difficulty: "medium",
    },
    {
      id: 21,
      question:
        "Nguyên nhân chính gây ra mất cân bằng giới tính khi sinh ở Việt Nam là:",
      options: [
        "Chỉ do chính sách dân số",
        "Do công nghệ y tế kém phát triển",
        'Sự kết hợp giữa tâm lý "trọng nam khinh nữ" và công nghệ hiện đại',
        "Do di cư lao động",
      ],
      correctAnswer: 2,
      difficulty: "medium",
    },
    {
      id: 22,
      question:
        "Vai trò của gia đình Việt Nam trong giai đoạn kháng chiến (1945-1975) đã chuyển đổi như thế nào?",
      options: [
        "Từ đơn vị kinh tế sang đơn vị văn hóa",
        "Từ đơn vị kinh tế-xã hội sang đơn vị chính trị-cách mạng",
        "Từ đơn vị xã hội sang đơn vị tôn giáo",
        "Từ đơn vị truyền thống sang đơn vị hiện đại",
      ],
      correctAnswer: 1,
      difficulty: "medium",
    },
    {
      id: 23,
      question:
        'Theo Lê-nin, việc xây dựng "con người mới xã hội chủ nghĩa" cần có những phẩm chất nào?',
      options: [
        "Giàu có và quyền lực",
        "Ý thức giai cấp, trung thành lý tưởng cộng sản, ưu tiên lợi ích tập thể",
        "Trình độ học vấn cao",
        "Kỹ năng làm việc tốt",
      ],
      correctAnswer: 1,
      difficulty: "medium",
    },
    {
      id: 24,
      question:
        "Chính sách nào được nhà nước Xô viết thực hiện để cải tạo gia đình?",
      options: [
        "Chỉ cấm chế độ đa thê",
        "Chỉ nâng tuổi kết hôn tối thiểu",
        "Thành lập ban phụ nữ, chiến dịch hujum, cấm đa thê, quy định tuổi kết hôn",
        "Chỉ thành lập các tổ chức phụ nữ",
      ],
      correctAnswer: 2,
      difficulty: "medium",
    },
    {
      id: 25,
      question:
        "Sự khác biệt cơ bản giữa quan điểm Mác-Lênin về gia đình và gia đình truyền thống Việt Nam là:",
      options: [
        "Mác-Lênin coi gia đình là sản phẩm lịch sử dựa trên phương thức sản xuất, còn gia đình truyền thống Việt Nam được củng cố bởi chế độ gia trưởng và phụ quyền",
        "Mác-Lênin chỉ quan tâm kinh tế, Việt Nam quan tâm văn hóa",
        "Mác-Lênin phủ nhận gia đình, Việt Nam tôn trọng gia đình",
        "Không có sự khác biệt",
      ],
      correctAnswer: 0,
      difficulty: "hard",
    },
    {
      id: 26,
      question:
        'Phân tích nào sau đây đúng về tình trạng "gánh nặng kép" mà phụ nữ Xô viết phải đối mặt?',
      options: [
        "Đây là kết quả tất yếu của việc giải phóng phụ nữ",
        "Đây cho thấy mâu thuẫn giữa chính sách thay đổi nhanh và cấu trúc xã hội-văn hóa thay đổi chậm",
        "Đây là do phụ nữ chưa có năng lực",
        "Đây là do chính sách sai lầm",
      ],
      correctAnswer: 1,
      difficulty: "hard",
    },
    {
      id: 27,
      question:
        "Theo báo cáo, việc người trẻ không muốn kết hôn, lập gia đình phản ánh điều gì?",
      options: [
        "Sự suy đồi đạo đức",
        "Ảnh hưởng tiêu cực của văn hóa phương Tây",
        "Hệ quả tất yếu của áp lực kinh tế, thời gian và xã hội trong quá trình chuyển đổi xã hội",
        "Sự thất bại của giáo dục gia đình",
      ],
      correctAnswer: 2,
      difficulty: "hard",
    },
    {
      id: 28,
      question:
        'Ý nghĩa sâu sắc của việc Việt Nam vận dụng phong trào "Ba đảm đang" là:',
      options: [
        "Chỉ nhằm thay thế lao động nam giới",
        'Thể hiện sự vận dụng sáng tạo lý luận Mác-Lênin, biến gia đình thành "chiến tuyến" cách mạng và phụ nữ thành chủ thể cách mạng',
        "Chỉ là biện pháp tạm thời trong chiến tranh",
        "Nhằm giải quyết thất nghiệp",
      ],
      correctAnswer: 1,
      difficulty: "hard",
    },
    {
      id: 29,
      question:
        "Mối quan hệ giữa các giá trị trong gia đình theo phân tích của báo cáo là:",
      options: [
        "Tình yêu là quan trọng nhất, các yếu tố khác không cần thiết",
        "Tình yêu là nền tảng khởi đầu, nhưng trách nhiệm, bình đẳng và tôn trọng là trụ cột duy trì gia đình vững chắc",
        "Tất cả các yếu tố có giá trị ngang nhau",
        "Trách nhiệm quan trọng hơn tình yêu",
      ],
      correctAnswer: 1,
      difficulty: "hard",
    },
    {
      id: 30,
      question:
        "Vấn đề mất cân bằng giới tính khi sinh ở Việt Nam cho thấy điều gì về quá trình quá độ?",
      options: [
        "Sự thất bại hoàn toàn của chính sách dân số",
        "Quá trình xây dựng gia đình tiến bộ không chỉ là câu chuyện kinh tế mà còn là cuộc đấu tranh tư tưởng lâu dài, phức tạp giữa cái cũ và cái mới",
        "Công nghệ hiện đại luôn có hại",
        "Truyền thống văn hóa không thể thay đổi",
      ],
      correctAnswer: 1,
      difficulty: "hard",
    },
  ],
  statistics: {
    easy: 15,
    medium: 9,
    hard: 6,
  },
};

//Quiz logic

import { useEffect, useState } from "react";

export function useQuiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    // Chọn ngẫu nhiên 10 câu hỏi theo tỉ lệ: 50% easy, 30% medium, 20% hard
    const selectQuestions = () => {
      const easyQuestions = quizData.questions.filter(
        (q) => q.difficulty === "easy"
      );
      const mediumQuestions = quizData.questions.filter(
        (q) => q.difficulty === "medium"
      );
      const hardQuestions = quizData.questions.filter(
        (q) => q.difficulty === "hard"
      );

      // Shuffle arrays
      const shuffle = (array) => array.sort(() => Math.random() - 0.5);

      const selectedEasy = shuffle(easyQuestions).slice(0, 5); // 50% = 5 câu
      const selectedMedium = shuffle(mediumQuestions).slice(0, 3); // 30% = 3 câu
      const selectedHard = shuffle(hardQuestions).slice(0, 2); // 20% = 2 câu

      const selected = [...selectedEasy, ...selectedMedium, ...selectedHard];
      setQuestions(shuffle(selected)); // Shuffle final list
    };

    selectQuestions();
  }, []);

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowAnswer(true);

    if (answerIndex === questions[currentQuestionIndex]?.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setScore(0);
    setQuizCompleted(false);
    // Re-select questions
    const selectQuestions = () => {
      const easyQuestions = quizData.questions.filter(
        (q) => q.difficulty === "easy"
      );
      const mediumQuestions = quizData.questions.filter(
        (q) => q.difficulty === "medium"
      );
      const hardQuestions = quizData.questions.filter(
        (q) => q.difficulty === "hard"
      );

      const shuffle = (array) => array.sort(() => Math.random() - 0.5);

      const selectedEasy = shuffle(easyQuestions).slice(0, 5);
      const selectedMedium = shuffle(mediumQuestions).slice(0, 3);
      const selectedHard = shuffle(hardQuestions).slice(0, 2);

      const selected = [...selectedEasy, ...selectedMedium, ...selectedHard];
      setQuestions(shuffle(selected));
    };
    selectQuestions();
  };

  return {
    questions,
    currentQuestion: questions[currentQuestionIndex],
    currentQuestionIndex,
    selectedAnswer,
    showAnswer,
    score,
    quizCompleted,
    totalQuestions: questions.length,
    handleAnswerSelect,
    nextQuestion,
    resetQuiz,
  };
}
