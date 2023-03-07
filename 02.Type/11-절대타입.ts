// void가 아닌 never(절대)를 반환하며 반환 값을 생성하지 않는다.
// 콘솔로 찍어보면 로그가 정의되지 않고 넘어간(throw) 에러가 스크립트와 충돌하므로 스크립트가 취소되기 때문
function generateError(message: string, code: number): never {
  throw { message: message, error: code };
}

generateError("에러발생!", 500);
